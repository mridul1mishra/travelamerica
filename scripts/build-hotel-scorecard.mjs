import { readFileSync, writeFileSync } from 'node:fs';
import { tierModel, legacyTierModel, calculateTier } from './hotel-tier-scoring.mjs';
import { assessments, assessmentDate } from './nyc-hotel-assessments.mjs';

const report = JSON.parse(readFileSync('content/cities/newyork/hotel-tier-proposals.json', 'utf8'));
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId = new Map(assessments.map(a => [a[0], a]));
if (byId.size !== 50 || assessments.length !== 50 || report.hotels.length !== 50) throw new Error('Expected exactly 50 unique assessments and hotels');
const modelData = { model: tierModel, assessedOn: assessmentDate, assessmentType: 'Editorial tier assessments from official evidence', hotels: report.hotels.map(h => {
 const a = byId.get(h.hotelId);
 if (!a || a[1].length !== 5 || a[2].length !== 5) throw new Error('Missing assessment for ' + h.hotelId);
 const evidence = {}, scores = {}, sources = [...h.sources];
 tierModel.dimensions.forEach((d, i) => {
  const value = a[1][i], source = a[3]?.[i] ?? 0;
  const sourceUrl = typeof source === 'number' ? h.sources[source]?.url : source;
  if (!sourceUrl || !a[2][i]?.trim() || (value !== null && (!Number.isInteger(value) || value < 0 || value > 4))) throw new Error('Invalid assessment: ' + h.hotelId + '/' + d.key);
  new URL(sourceUrl);
  scores[d.key] = value;
  evidence[d.key] = { status: value === null ? 'Evidence insufficient' : 'Scored', note: a[2][i], sourceUrl, reviewedOn: assessmentDate, scope: 'Regular accommodation/property-wide guest offering; category-only exceptions stated in note' };
  if (!sources.some(s => s.url === sourceUrl)) sources.push({ url: sourceUrl, type: 'Official property or operator', reviewedOn: assessmentDate });
 });
 const result = calculateTier(scores);
 const pendingDimensions = tierModel.dimensions.filter(d => scores[d.key] === null).map(d => d.key);
 return { hotelId: h.hotelId, sourceId: h.sourceId, name: h.name, neighborhood: h.neighborhood, existingDatabaseTier: h.existingDatabaseTier, officialPropertyFacts: tierModel.dimensions.map(d => evidence[d.key].note).join(' '), sources, ...scores, evidence, score: result.score, tier: result.tier, assessmentStatus: pendingDimensions.length ? 'Human review required' : 'Scored proposal', pendingDimensions, tierReason: result.reason };
 }) };
const research = JSON.parse(readFileSync('content/cities/newyork/hotel-tier-deep-research.json', 'utf8'));
if (JSON.stringify(research.model) !== JSON.stringify(legacyTierModel)) throw new Error('Research rubric differs from its agreed original model');
const researchIds = new Set(research.hotels.map(h => h.hotelId));
if (researchIds.size !== 24 || research.hotels.length !== 24) throw new Error('Expected 24 unique research hotels');
for (const incoming of research.hotels) {
 const index = modelData.hotels.findIndex(h => h.hotelId === incoming.hotelId);
 if (index < 0 || modelData.hotels[index].sourceId !== incoming.sourceId) throw new Error('Research identity mismatch');
 const calculated = calculateTier(incoming, { requireComplete: true });
 if (calculated.score !== incoming.score || calculated.tier !== incoming.tier) throw new Error('Research calculation mismatch');
 const h = structuredClone(incoming);
 for (const d of tierModel.dimensions) {
  const e = h.evidence[d.key];
  if (!e?.note?.trim() || new URL(e.sourceUrl).protocol !== 'https:') throw new Error('Missing research evidence');
  e.note = e.note.replace(/\s*\[\d+\]/g, '');
  e.status = h[d.key] === null ? 'Evidence insufficient' : 'Scored';
 }
 h.pendingDimensions = tierModel.dimensions.filter(d => h[d.key] === null).map(d => d.key);
 h.officialPropertyFacts = tierModel.dimensions.map(d => h.evidence[d.key].note).join(' ');
 h.assessmentStatus = h.pendingDimensions.length ? 'Human review required' : 'Scored proposal';
 h.tierReason = calculated.reason;
 h.researchProvenance = 'User-supplied Deep Research assessment; proposed tiers, not database assignments';
 modelData.hotels[index] = h;
}
modelData.researchProvenance = 'Includes 24 user-supplied Deep Research assessments with preserved evidence and change history';
const targeted = JSON.parse(readFileSync('content/cities/newyork/hotel-tier-targeted-research.json', 'utf8'));
if (JSON.stringify(targeted.model) !== JSON.stringify(legacyTierModel)) throw new Error('Targeted research rubric differs from its agreed original model');
const targetedIds = new Set(targeted.hotels.map(h => h.hotelId));
const expectedTargetedIds = new Set(modelData.hotels.filter(h => h.pendingDimensions.length > 0).map(h => h.hotelId));
if (targetedIds.size !== targeted.hotels.length || targetedIds.size !== expectedTargetedIds.size || [...targetedIds].some(id => !expectedTargetedIds.has(id))) throw new Error('Targeted research must contain exactly the pending hotels');
for (const incoming of targeted.hotels) {
 const h = modelData.hotels.find(h => h.hotelId === incoming.hotelId);
 if (h.sourceId !== incoming.sourceId || h.name !== incoming.name) throw new Error('Targeted research identity mismatch');
 const calculated = calculateTier(incoming, { requireComplete: true });
 if (calculated.score !== incoming.score || calculated.tier !== incoming.tier) throw new Error('Targeted research calculation mismatch');
 const pendingBefore = [...h.pendingDimensions];
 for (const d of tierModel.dimensions) {
  if (incoming[d.key] !== null && (!Number.isInteger(incoming[d.key]) || incoming[d.key] < 0 || incoming[d.key] > 4)) throw new Error('Invalid targeted dimension score');
  if (h[d.key] !== null) {
   if (incoming[d.key] !== h[d.key]) throw new Error('Targeted research changes an already scored dimension');
   continue;
  }
  const e = structuredClone(incoming.evidence[d.key]);
  if (!e?.note?.trim() || new URL(e.sourceUrl).protocol !== 'https:') throw new Error('Missing targeted evidence');
  e.priorEvidenceSnapshot = structuredClone(h.evidence[d.key]);
  e.note = e.note.replace(/\s*\[\d+\]/g, '');
  e.status = incoming[d.key] === null ? 'Evidence insufficient' : 'Scored';
  h.evidence[d.key] = e;
  h[d.key] = incoming[d.key];
  if (h[d.key] !== null) {
   h.scoreChanges ??= [];
   h.scoreChanges.push({ dimension: d.key, previousScore: null, newScore: h[d.key], researchDate: e.researchDate, reasoning: e.reasoning ?? e.note, sourceUrls: [e.sourceUrl, ...(e.additionalSourceUrls ?? [])] });
  }
 }
 for (const key of pendingBefore) {
  const e = h.evidence[key];
  const sources = [...(incoming.sources ?? []), ...(e.reportOfficialSources ?? []), {url:e.sourceUrl,type:'Official property or operator',reviewedOn:e.reviewedOn}, ...(e.additionalSourceUrls ?? []).map(url => ({url,type:'Official property or operator',reviewedOn:e.reviewedOn}))];
  for (const s of sources) if (!h.sources.some(existing => existing.url === s.url)) h.sources.push(s);
 }
 h.pendingDimensions = tierModel.dimensions.filter(d => h[d.key] === null).map(d => d.key);
 h.officialPropertyFacts = tierModel.dimensions.map(d => h.evidence[d.key].note).join(' ');
 h.score = calculated.score;
 h.tier = calculated.tier;
 h.tierReason = calculated.reason;
 h.assessmentStatus = h.pendingDimensions.length ? 'Human review required' : 'Scored proposal';
 h.lastTargetedReviewOn = '2026-10-11';
 h.researchProvenance += '; targeted second pass reviewed 2026-10-11';
}
modelData.lastTargetedReviewOn = '2026-10-11';
modelData.researchProvenance += '; targeted second pass for 14 hotels reviewed 2026-10-11';
for (const h of modelData.hotels) {
 const evidenced = Object.fromEntries(tierModel.dimensions.map(d => [d.key, h.evidence[d.key]?.note?.trim() && h.evidence[d.key]?.sourceUrl ? h[d.key] : null]));
 const result = calculateTier(evidenced);
 h.score = result.score;
 h.tier = result.tier;
 h.tierReason = result.reason;
 h.evidenceCoverage = result.evidenceCoverage;
 h.scoredDimensions = result.scoredDimensions;
 h.isProvisional = result.isProvisional;
 h.assessmentStatus = result.score === null ? 'Unscored' : result.isProvisional ? 'Provisional tier from available evidence' : 'Scored proposal';
}
modelData.scoringPolicyUpdatedOn = '2026-10-11';
const completed = modelData.hotels.filter(h => !h.isProvisional).length;
const assigned = modelData.hotels.filter(h => h.tier).length;
const scoredDimensions = modelData.hotels.reduce((n,h) => n + tierModel.dimensions.filter(d => h[d.key] !== null).length, 0);
const pending = modelData.hotels.flatMap(h => h.pendingDimensions.map(key => ({ hotelId: h.hotelId, name: h.name, dimension: key, reason: h.evidence[key].note, sourceUrl: h.evidence[key].sourceUrl })));
modelData.summary = { hotelsReviewed: 50, dimensionsReviewed: 250, dimensionsScored: scoredDimensions, dimensionsNeedingHumanReview: pending.length, hotelsFullyScored: completed, hotelsNeedingHumanReview: 50-completed, hotelsWithTier: assigned, hotelsWithProvisionalTier: modelData.hotels.filter(h=>h.tier && h.isProvisional).length, tiers: Object.fromEntries(['Standard','Premium','Luxury'].map(t => [t,modelData.hotels.filter(h=>h.tier===t).length])) };
let databaseSync;
try { databaseSync=JSON.parse(readFileSync('content/cities/newyork/hotel-tier-database-sync.json','utf8')); }
catch(error) { if(error.code!=='ENOENT') throw error; }
if(databaseSync && (databaseSync.city!=='nyc' || databaseSync.source!=='travel-advisor' || databaseSync.modelVersion!==tierModel.version || databaseSync.hotels.length!==50 || new Set(databaseSync.hotels.map(h=>h.sourceId)).size!==50 || databaseSync.hotels.some(h=>!modelData.hotels.some(a=>a.sourceId===h.sourceId)))) throw new Error('Invalid database tier synchronization report');
const savedTierMatches=databaseSync?.hotels.filter(h=>{const a=modelData.hotels.find(a=>a.sourceId===h.sourceId);return h.tier===a.tier && h.score===a.score && h.isProvisional===a.isProvisional && h.evidenceCoverage===a.evidenceCoverage && h.scoredDimensions===a.scoredDimensions;}).length ?? 0;
const syncDate=databaseSync ? new Date(databaseSync.verifiedAt).toLocaleString('en-US',{timeZone:'America/New_York'}) : null;
const databaseNote=databaseSync ? `Tiers, scores, dimension evidence and provisional metadata are saved in the hotel database. Verified ${syncDate} (New York time); ${savedTierMatches}/50 stored assessments match the current scorecards. The updated visitor listing reads saved database tiers.` : 'The visitor hotel listing uses these scorecard tiers, matched to hotel inventory by provider IDs. Stored database tiers remain unchanged.';
writeFileSync('content/cities/newyork/hotel-tier-scorecards.json', JSON.stringify(modelData, null, 2) + '\n');
const reviewHotels = modelData.hotels.filter(h => targetedIds.has(h.hotelId));
const publicReview = { ...modelData, scope: 'The 14 hotels submitted for targeted research; partial assessments now have provisional tiers from available evidence', summary: { hotelsIncluded: reviewHotels.length, dimensionsReviewed: reviewHotels.length * 5, dimensionsScored: reviewHotels.reduce((n,h) => n + 5 - h.pendingDimensions.length, 0), dimensionsNeedingHumanReview: reviewHotels.reduce((n,h) => n + h.pendingDimensions.length, 0), hotelsFullyScored: reviewHotels.filter(h => !h.isProvisional).length, hotelsNeedingHumanReview: reviewHotels.filter(h => h.isProvisional).length, hotelsWithTier: reviewHotels.filter(h => h.tier).length, hotelsWithProvisionalTier: reviewHotels.filter(h => h.tier && h.isProvisional).length, proposedTierCounts: Object.fromEntries(['Standard','Premium','Luxury'].map(t => [t,reviewHotels.filter(h => h.tier === t).length])) }, hotels: reviewHotels };
writeFileSync('public/hotel-tier-scorecards.json', JSON.stringify(publicReview, null, 2) + '\n');
const html = `<section id="hotel-scoring"><style>
 #hotel-scoring{margin:40px 0}#hotel-scoring .panel{background:white;border:1px solid #dce2ea;border-radius:12px;padding:24px;margin:20px 0}#hotel-scoring .controls{display:grid;grid-template-columns:1fr;gap:18px}#hotel-scoring .dimension{padding:16px;background:#f5f7fa;border-radius:8px}#hotel-scoring label{display:block;margin:8px 0}#hotel-scoring select,#hotel-scoring textarea,#hotel-scoring button{font:inherit;padding:9px;border:1px solid #aebccc;border-radius:6px;max-width:100%}#hotel-scoring select,#hotel-scoring textarea{width:100%}#hotel-scoring textarea{min-height:65px}#hotel-scoring button{background:#182235;color:white;cursor:pointer}#hotel-scoring .result{padding:18px;background:#edf2f8;border-left:4px solid #326599;margin:18px 0}#hotel-scoring .scroll{overflow:auto;background:white;border:1px solid #dce2ea;border-radius:8px}#hotel-scoring table{border-collapse:collapse;width:100%;min-width:600px}#hotel-scoring th,#hotel-scoring td{padding:12px 15px;text-align:left;border-bottom:1px solid #e4e8ee;vertical-align:top}#hotel-scoring th{background:#182235;color:white}#hotel-scoring a{color:#1a5294}#hotel-scoring .dim-rubric{min-width:220px}#hotel-scoring .note{font-size:14px;color:#526174}@media(min-width:850px){#hotel-scoring .controls{grid-template-columns:1fr 1fr}}@media print{#hotel-scoring .controls,#hotel-scoring button{display:none}}
 </style><h2>Hotel tier scoring assessments</h2><p>All ${assigned} hotels have a calculated tier under the agreed scoring model. Assessments began on ${assessmentDate}; the latest targeted review was on ${modelData.lastTargetedReviewOn}. ${scoredDimensions} of 250 dimensions scored. ${completed} hotels have complete evidence; ${assigned-completed} have provisional tiers based on available dimensions. ${pending.length} dimensions remain unknown.</p><p>${esc(databaseNote)} Edits in this report are browser-session reviews and do not update the database or visitor listing.</p><p id="score-tier-summary">${Object.entries(modelData.summary.tiers).map(([tier,count])=>`${count} ${tier}`).join(' · ')}</p><p><a href="hotel-tier-scorecards.json">Open the ${reviewHotels.length} targeted research hotel assessments (JSON)</a></p>
 <div class="panel"><h3>Weights and calculation</h3><p><strong>Total = Σ (known dimension score ÷ 4 × weight) ÷ Σ (known weights) × 100.</strong> Each dimension is scored 0–4. Unknown remains null and contributes neither points nor weight. A dimension is included only with a score, an evidence note and an official source. Partial scores and tiers are marked <strong>Provisional</strong> and show the percentage of the original weight supported by evidence. Complete assessments use all 100% of the weight.</p>
 <div class="scroll"><table><thead><tr><th scope="col">Dimension</th><th scope="col">Weight</th></tr></thead><tbody>${tierModel.dimensions.map(d=>`<tr><td>${esc(d.name)}</td><td>${d.weight}%</td></tr>`).join('')}</tbody></table></div>
 <p><strong>Standard:</strong> below 50. <strong>Premium:</strong> 50 to below 75. <strong>Luxury:</strong> 75–100, with evidenced rooms and guest service each scoring at least 3/4. A score of 75 or more without both Luxury requirements produces Premium. Thresholds use the unrounded total. Partial scores can change when missing evidence becomes available.</p>
 <p>${esc(tierModel.scope)}</p><p class="note">The agreed model uses five dimensions and fixed tier thresholds. Ratings, price, brand and marketing language are not scoring substitutes. A facility being unmentioned does not prove it is absent.</p>
 <details><summary>Detailed scoring rubric: 0–4 for each dimension</summary><div class="scroll"><table><thead><tr><th scope="col">Dimension</th>${[0,1,2,3,4].map(n=>`<th scope="col">${n}</th>`).join('')}</tr></thead><tbody>${tierModel.dimensions.map(d=>`<tr><th scope="row">${esc(d.name)}</th>${d.rubric.map(text=>`<td class="dim-rubric">${esc(text)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details></div>
 <div class="panel"><h3>Review a hotel’s scores and evidence</h3><label for="score-hotel">Choose a hotel</label><select id="score-hotel">${modelData.hotels.map(h=>`<option value="${esc(h.hotelId)}">${esc(h.hotelId)} · ${esc(h.name)}</option>`).join('')}</select>
 <p id="score-facts"></p><p id="score-sources"></p><p class="note">Select scores only where the linked property details support the rubric. Leave unclear dimensions as Unknown for human intervention. Changes stay in this browser session; download the review JSON to retain or share them. Each hotel saves rooms, guestService, dining, wellness and design individually, alongside score, tier and supporting evidence. The total and tier are recalculated from those dimensions.</p>
 <div class="controls">${tierModel.dimensions.map(d=>`<div class="dimension"><strong>${esc(d.name)} · ${d.weight}%</strong><p class="note" id="status-${d.key}"></p><label for="score-${d.key}">Score</label><select id="score-${d.key}" data-key="${d.key}" class="score-input"><option value="">Evidence insufficient / human review</option>${d.rubric.map((text,n)=>`<option value="${n}">${n} — ${esc(text)}</option>`).join('')}</select><label for="note-${d.key}">Official evidence, reasoning and scope</label><textarea id="note-${d.key}" placeholder="Document the feature and whether it applies to regular rooms."></textarea><label for="source-${d.key}">Supporting official source</label><select id="source-${d.key}"></select></div>`).join('')}</div>
 <div class="result" id="score-result" role="status" aria-live="polite">Awaiting complete evidence and scoring</div><button id="download-scores" type="button">Download review JSON</button></div>
 <h3>Assessment grid for all 50 hotels</h3><p id="score-progress" aria-live="polite">${completed} complete assessments · ${assigned-completed} provisional tiers</p><div class="scroll"><table id="score-overview"><thead><tr>${['HotelId','Hotel','Neighborhood',...tierModel.dimensions.map(d=>d.name+' /4'),'Score /100','Calculated tier','Evidence coverage'].map(t=>`<th scope="col">${t}</th>`).join('')}</tr></thead><tbody>${modelData.hotels.map(h=>`<tr data-id="${esc(h.hotelId)}"><td>${esc(h.hotelId)}</td><td><button class="review-hotel" type="button" data-hotel="${esc(h.hotelId)}">${esc(h.name)}</button></td><td>${esc(h.neighborhood)}</td>${tierModel.dimensions.map(d=>`<td class="dimension-score" data-key="${d.key}" title="${esc(h.evidence[d.key].note)}">${h[d.key]??'Unknown'}</td>`).join('')}<td class="total">${h.score===null?'—':h.score.toFixed(2)}</td><td class="tier">${h.tier??'Unassigned'}${h.tier&&h.isProvisional?' · Provisional':''}</td><td class="coverage">${h.evidenceCoverage}% weight · ${h.scoredDimensions}/5 dimensions</td></tr>`).join('')}</tbody></table></div>
 <div class="panel"><h3>Unscored dimensions</h3><p>These missing details remain unknown and are excluded from provisional scores. Additional official evidence can complete or revise an assessment. These rows record the research gaps; the live grid reflects edits made during this session.</p><div class="scroll"><table><thead><tr><th>Hotel</th><th>Dimension</th><th>Specific evidence gap / question</th><th>Reviewed official source</th></tr></thead><tbody>${pending.map(p=>`<tr><td>${esc(p.hotelId)} · ${esc(p.name)}</td><td>${esc(tierModel.dimensions.find(d=>d.key===p.dimension).name)}</td><td>${esc(p.reason)}</td><td><a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener noreferrer">Property details</a></td></tr>`).join('')}</tbody></table></div></div>
 <script>(()=>{const data=${JSON.stringify(modelData).replace(/</g,'\\u003c')};const calculate=${calculateTier.toString()};const picker=document.getElementById('score-hotel');const dims=data.model.dimensions;const hotels=new Map(data.hotels.map(h=>[h.hotelId,h]));
 function assessed(h){const evidenced=Object.fromEntries(dims.map(d=>[d.key,h.evidence[d.key]?.note?.trim()&&h.evidence[d.key]?.sourceUrl?h[d.key]:null]));return calculate(evidenced)}
 function refresh(){let done=0,covered=0,assigned=0,provisional=0;for(const h of data.hotels){const r=assessed(h);h.score=r.score;h.tier=r.tier;h.tierReason=r.reason;h.evidenceCoverage=r.evidenceCoverage;h.scoredDimensions=r.scoredDimensions;h.isProvisional=r.isProvisional;h.pendingDimensions=dims.filter(d=>!Number.isInteger(h[d.key])||h[d.key]<0||h[d.key]>4||!h.evidence[d.key]?.note?.trim()||!h.evidence[d.key]?.sourceUrl).map(d=>d.key);h.assessmentStatus=r.score===null?'Unscored':r.isProvisional?'Provisional tier from available evidence':'Scored proposal';covered+=r.scoredDimensions;if(!r.isProvisional)done++;if(r.tier){assigned++;if(r.isProvisional)provisional++}const row=document.querySelector('#score-overview tr[data-id="'+h.hotelId+'"]');row.querySelector('.total').textContent=r.score===null?'—':r.score.toFixed(2);row.querySelector('.tier').textContent=(r.tier??'Unassigned')+(r.tier&&r.isProvisional?' · Provisional':'');row.querySelector('.coverage').textContent=r.evidenceCoverage+'% weight · '+r.scoredDimensions+'/5 dimensions';for(const d of dims){const cell=row.querySelector('[data-key="'+d.key+'"]');cell.textContent=h[d.key]??'Unknown';cell.title=h.evidence[d.key]?.note??''}}data.summary={hotelsReviewed:50,dimensionsReviewed:250,dimensionsScored:covered,dimensionsNeedingHumanReview:250-covered,hotelsFullyScored:done,hotelsNeedingHumanReview:50-done,hotelsWithTier:assigned,hotelsWithProvisionalTier:provisional,tiers:Object.fromEntries(['Standard','Premium','Luxury'].map(t=>[t,data.hotels.filter(h=>h.tier===t).length]))};document.getElementById('score-progress').textContent=done+' complete assessments · '+provisional+' provisional tiers';const h=hotels.get(picker.value),r=assessed(h);for(const d of dims)document.getElementById('status-'+d.key).textContent=h.evidence[d.key]?.status??'Not assessed';document.getElementById('score-result').textContent=r.score===null?r.reason:r.score.toFixed(2)+'/100 · '+r.tier+(r.isProvisional?' · Provisional':'')+' · '+r.evidenceCoverage+'% evidence weight — '+r.reason}
 function load(){const h=hotels.get(picker.value);document.getElementById('score-facts').textContent=h.officialPropertyFacts;const links=document.getElementById('score-sources');links.replaceChildren();h.sources.forEach((s,i)=>{const a=document.createElement('a');a.href=s.url;a.textContent='Official source '+(i+1);a.target='_blank';a.rel='noopener noreferrer';links.append(a,document.createTextNode(' · '))});for(const d of dims){document.getElementById('score-'+d.key).value=h[d.key]??'';document.getElementById('note-'+d.key).value=h.evidence[d.key]?.note??'';const select=document.getElementById('source-'+d.key);select.replaceChildren(new Option('Choose supporting source',''));h.sources.forEach((s,i)=>select.add(new Option('Source '+(i+1)+' · '+s.url,s.url)));select.value=h.evidence[d.key]?.sourceUrl??''}refresh()}
 function save(){const h=hotels.get(picker.value);for(const d of dims){const previousScore=h[d.key];const value=document.getElementById('score-'+d.key).value;h[d.key]=value===''?null:Number(value);const note=document.getElementById('note-'+d.key).value,sourceUrl=document.getElementById('source-'+d.key).value;const old=h.evidence[d.key]??{};const changed=h[d.key]!==previousScore||note!==old.note||sourceUrl!==old.sourceUrl;h.evidence[d.key]={...old,status:value!==''&&note.trim()&&sourceUrl?'Scored':'Evidence insufficient',note,sourceUrl,...(changed?{editedInReview:true}:{})}}refresh()}
 picker.addEventListener('change',load);document.querySelectorAll('.review-hotel').forEach(b=>b.addEventListener('click',()=>{picker.value=b.dataset.hotel;load();picker.scrollIntoView({behavior:'smooth',block:'start'})}));for(const d of dims){document.getElementById('score-'+d.key).addEventListener('change',save);document.getElementById('note-'+d.key).addEventListener('input',save);document.getElementById('source-'+d.key).addEventListener('change',save)}document.getElementById('download-scores').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({...data,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='hotel-tier-scorecards.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});load();})();</script></section>`;
const path='public/hotel-data-integration.html';
let integration=readFileSync(path,'utf8').replace(/<!-- HOTEL_SCORING_START -->[\s\S]*?<!-- HOTEL_SCORING_END -->/,'');
const inventory = JSON.parse(readFileSync('content/cities/newyork/hotel-neighborhood-report.json', 'utf8')).hotels;
const assessmentsBySourceId = new Map(modelData.hotels.map(h => [h.sourceId,h]));
const mapping = inventory.map(h => {
 const assessment = assessmentsBySourceId.get(h.source_id);
 if (!assessment || String(h.id) !== assessment.hotelId) throw new Error('Inventory assessment mismatch: ' + h.id);
 return { inventory:h, assessment };
});
if (mapping.length !== modelData.hotels.length) throw new Error('Incomplete hotel mapping');
const mappingHtml = `<h2>All 50 hotels</h2><p>Current scores and tiers use the latest assessments. Provisional means some evidence remains unknown.</p><div class="scroll" tabindex="0"><table id="hotel-mapping"><thead><tr>${['HotelId','Hotel','Neighborhood','Score /100','Tier','Assessment','Evidence coverage','Address'].map(label=>`<th scope="col">${label}</th>`).join('')}</tr></thead><tbody>${mapping.map(({inventory:h,assessment:a})=>`<tr data-hotel="${esc(a.hotelId)}"><td>${esc(h.id)}</td><td>${esc(h.name)}</td><td>${esc(h.neighborhood)}</td><td class="mapping-score">${a.score===null?'—':a.score.toFixed(2)}</td><td class="mapping-tier">${esc(a.tier??'Unassigned')}</td><td class="mapping-status">${a.isProvisional?'Provisional':'Complete'}</td><td class="mapping-coverage">${a.evidenceCoverage}% weight · ${a.scoredDimensions}/5 dimensions</td><td>${esc(h.address)}</td></tr>`).join('\n')}</tbody></table></div>`;
const mappingPattern=/<h2>All 50 hotels<\/h2>[\s\S]*?<\/table><\/div>/;
if (!mappingPattern.test(integration)) throw new Error('Missing hotel inventory grid');
integration=integration.replace(mappingPattern,mappingHtml);
const tierState=`${assigned}/50 have a tier · ${Object.entries(modelData.summary.tiers).map(([tier,count])=>`${count} ${tier}`).join(' · ')}`;
const stored=(databaseSync?.hotels ?? inventory).filter(h=>h.tier ?? h.hotel_tier).length;
integration=integration.replace(/<tr><td>Hotel tier<\/td>[\s\S]*?<\/tr>/,`<tr><td>Hotel tier</td><td id="tier-completeness">${tierState}</td><td id="tier-evidence-status">${completed} complete assessments · ${assigned-completed} provisional tiers · ${pending.length} unknown dimensions</td></tr>`);
const databaseState=`<tr id="database-tier-state"><td>Stored database tier</td><td>${stored}/50 populated${databaseSync?` · verified ${esc(syncDate)} (New York time)`:' in the database snapshot'}</td><td>${databaseSync?`${savedTierMatches}/50 match current tiers, scores and provisional metadata.`:'The visitor listing uses the scorecard tiers. Stored values are unchanged.'}</td></tr>`;
integration=integration.replace(/\s*<tr id="database-tier-state">[\s\S]*?<\/tr>\s*/,'');
integration=integration.replace(/(<td id="tier-evidence-status">[\s\S]*?<\/td><\/tr>)/,`$1\n${databaseState}`);
integration=integration.replace(/<h3>Your decisions needed \((\d+)\)<\/h3><p>[\s\S]*?<\/p>/,'<h3>Earlier unresolved proposals ($1)</h3><p>Historical qualitative proposals only. Use the current scoring assessments above for the latest tiers and evidence gaps.</p>');
integration=integration.replace('Database tiers have not been changed. Unclear proposals remain unassigned until you decide. Existing database values are shown separately and are not newly confirmed by this report.', 'Database values and unresolved proposals in this archived section reflect the original review snapshot. Current tiers and database synchronization status are shown above.');
const marker='<!-- HOTEL_TIER_REVIEW_START -->';
if(!integration.includes(marker))throw new Error('Missing official property review');
integration=integration.replace(marker,`<!-- HOTEL_SCORING_START -->${html}<!-- HOTEL_SCORING_END -->${marker}`);
writeFileSync(path,integration);
console.log(JSON.stringify(modelData.summary));
