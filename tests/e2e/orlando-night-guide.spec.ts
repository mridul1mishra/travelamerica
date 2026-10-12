import {test,expect} from '@playwright/test';
test('Orlando night guide renders research-led content, hotel links and matching FAQ schema',async({page},testInfo)=>{
 await page.route(/googletagmanager\.com/,r=>r.abort());
 await page.route(/\/api\/auth\/get-session/,r=>r.fulfill({contentType:'application/json',body:'null'}));
 await page.goto('/destination/orlando/is-orlando-safe-at-night');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('h1')).toHaveText('Is Orlando Safe at Night? Where to Stay and How to Get Back');
 await expect(page).toHaveTitle(/Is Orlando Safe at Night\? Hotel Areas & Travel Tips/);
 await expect(page.locator('#neighborhoods h3')).toHaveCount(11);
 await expect(page.locator('#faq details')).toHaveCount(8);
 const schemas=await page.locator('script[type="application/ld+json"]').allTextContents();
 const faq=schemas.flatMap(s=>JSON.parse(s)).find(s=>s['@type']==='FAQPage');
 expect(faq.mainEntity).toHaveLength(8);
 for(const [i,item] of faq.mainEntity.entries()){
  await expect(page.locator('#faq summary').nth(i)).toHaveText(item.name);
  await expect(page.locator('#faq details p').nth(i)).toHaveText(item.acceptedAnswer.text);
 }
 const brokenAnchors=await page.locator('main a[href^="#"]').evaluateAll(links=>links.filter(a=>!document.getElementById((a.getAttribute('href') ?? '').slice(1))).length);
 expect(brokenAnchors).toBe(0);
 await page.getByRole('link',{name:'Compare Orlando hotel locations',exact:true}).click();
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

