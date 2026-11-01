import {test,expect} from '@playwright/test';

test('Orlando night guide preserves all nine section jumps on desktop and mobile',async({page})=>{
 await page.route(/googletagmanager\.com/,r=>r.abort());
 await page.route(/\/api\/auth\/get-session/,r=>r.fulfill({contentType:'application/json',body:'null'}));
 await page.emulateMedia({reducedMotion:'reduce'});
 const sections=[['night-safety','Short answer'],['neighborhoods','Areas after dark'],['walking','Walking'],['where-to-stay','Where to stay'],['hotel-checklist','Before booking'],['getting-back','Return transport'],['evening-outings','Evening outings'],['travelers','Who is travelling'],['faq','FAQs']];
 for(const [name,width,height] of [['desktop',1440,1000],['mobile',390,844]] as const){
  await page.setViewportSize({width,height});
  await page.goto('/destination/orlando/is-orlando-safe-at-night');
  const nav=page.getByRole('navigation',{name:'Explore this guide'});
  await expect(nav.getByRole('link')).toHaveText(sections.map(([,label])=>label));
  for(const [id,label] of sections){
   const link=nav.getByRole('link',{name:label,exact:true});
   await expect(link).toHaveAttribute('href',`#${id}`);
   await link.click();
   await expect(page).toHaveURL(new RegExp(`#${id}$`));
   await expect(link).toHaveAttribute('aria-current','location');
   await expect(page.locator(`#${id}`)).toBeInViewport();
  }
  await expect(page.locator('main article > section')).toHaveCount(9);
  // Scroll without clicking navigation; the current link must follow in both directions.
  for(const [id,label] of [...sections,...sections.slice().reverse()]){
   await page.locator(`#${id}`).evaluate(el=>el.scrollIntoView({block:'start',behavior:'instant'}));
   const active=nav.getByRole('link',{name:label,exact:true});
   await expect(active).toHaveAttribute('aria-current','location');
   await expect(nav.locator('[aria-current="location"]')).toHaveCount(1);
   const visible=await active.evaluate(el=>{const r=el.getBoundingClientRect(),p=el.closest('ul')!.getBoundingClientRect();return r.left>=p.left-1&&r.right<=p.right+1;});
   expect(visible).toBe(true);
  }
  for(const [id] of sections) await expect(page.locator(`#${id}`)).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await expect(page.locator('#faq')).toContainText('Safety information and research limitations');
  await page.evaluate(()=>document.fonts.ready);
  await page.screenshot({path:`docs/screenshot/orlando-night-enriched-${name}.png`,fullPage:true});
 }
});

test('Orlando night guide renders research-led content, hotel links and matching FAQ schema',async({page},testInfo)=>{
 await page.route(/googletagmanager\.com/,r=>r.abort());
 await page.route(/\/api\/auth\/get-session/,r=>r.fulfill({contentType:'application/json',body:'null'}));
 await page.goto('/destination/orlando/is-orlando-safe-at-night');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('h1')).toHaveText('Is Orlando Safe at Night? An Area-by-Area Guide');
 await expect(page).toHaveTitle(/Is Orlando Safe at Night\? Walking & Area Guide/);
 await expect(page.locator('#neighborhoods h3')).toHaveCount(5);
 await expect(page.locator('#faq details')).toHaveCount(5);
 const schemas=await page.locator('script[type="application/ld+json"]').allTextContents();
 const faq=schemas.flatMap(s=>JSON.parse(s)).find(s=>s['@type']==='FAQPage');
 expect(faq.mainEntity).toHaveLength(5);
 for(const [i,item] of faq.mainEntity.entries()){
  await expect(page.locator('#faq summary').nth(i)).toHaveText(item.name);
  await expect(page.locator('#faq details p').nth(i)).toHaveText(item.acceptedAnswer.text);
 }
 const brokenAnchors=await page.locator('main a[href^="#"]').evaluateAll(links=>links.filter(a=>!document.getElementById((a.getAttribute('href') ?? '').slice(1))).length);
 expect(brokenAnchors).toBe(0);
 await page.getByRole('link',{name:'Compare hotel locations and transport needs',exact:true}).click();
 await expect(page).toHaveURL(/\/destination\/orlando\/hotel\?from=is-orlando-safe-at-night/);
 await page.goto('/destination/orlando/is-orlando-safe-at-night');
 await page.setViewportSize({width:390,height:844});
  await page.reload();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.getByRole('heading',{name:'International Drive, Downtown and other Orlando areas after dark',exact:true}).scrollIntoViewIfNeeded();
 await page.screenshot({path:testInfo.outputPath('orlando-night-mobile.png')});
});

test('Orlando back-to-top arrow returns to the title',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.goto('/destination/orlando/is-orlando-safe-at-night');
 await expect(page.getByRole('button',{name:'Back to top',exact:true})).toHaveCount(0);
 await page.locator('#faq').scrollIntoViewIfNeeded();
 await page.getByRole('button',{name:'Back to top',exact:true}).click();
 await expect.poll(()=>page.evaluate(()=>scrollY)).toBe(0);
 await expect(page.locator('#orlando-night-title')).toBeFocused();
});

