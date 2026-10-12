import {test,expect} from '@playwright/test';
for(const city of ['nyc','orlando','lasvegas']) {
 test(`${city} shares the hotel search toolbar and accordion panel`,async({page})=>{
  await page.route(/googletagmanager\.com/,r=>r.abort());
  await page.route(/\/api\/auth\/get-session/,r=>r.fulfill({contentType:'application/json',body:'null'}));
  await page.goto(`/destination/${city}/hotel`);
  const cards=page.locator('[data-hotel-card]');await expect(cards).toHaveCount(50);
  const search=page.getByRole('searchbox',{name:'Search hotels',exact:true});
  await search.fill('no-such-hotel-xyz');await expect(cards).toHaveCount(0);
  await page.getByRole('button',{name:'Clear search',exact:true}).click();await expect(cards).toHaveCount(50);
  await page.getByRole('button',{name:'Filter hotels',exact:true}).click();
  const panel=page.getByRole('dialog',{name:'Filter hotels'});await expect(panel).toBeVisible();
  if(city==='nyc'){
   await panel.getByText('Neighborhoods',{exact:true}).click();
   const checkbox=panel.getByRole('checkbox').first();await checkbox.check();
   expect(await cards.count()).toBeLessThan(50);
   await panel.getByText('Hotel tier',{exact:true}).click();
   await expect(panel.getByRole('radio',{name:'All tiers',exact:true})).toBeChecked();
   await panel.getByRole('button',{name:'Clear filters',exact:true}).click();await expect(cards).toHaveCount(50);
  } else {await expect(panel.getByText(/More filters will appear/)).toBeVisible();}
  await page.keyboard.press('Escape');await expect(panel).not.toBeVisible();
  await page.setViewportSize({width:390,height:844});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 });
}

test('NYC base plans combine locations, deduplicate overlapping areas and persist',async({page})=>{
 await page.route(/googletagmanager\.com/,r=>r.abort());
 await page.route(/\/api\/auth\/get-session/,r=>r.fulfill({contentType:'application/json',body:'null'}));
 await page.goto('/destination/nyc/hotel?from=is-nyc-safe-at-night');
 await page.getByRole('button',{name:'Filter hotels',exact:true}).click();
 const panel=page.getByRole('dialog',{name:'Filter hotels'});
 await panel.getByRole('checkbox',{name:'Central Park visits 9 hotels',exact:true}).check();
 await panel.getByRole('checkbox',{name:'Upper West Side stays 4 hotels',exact:true}).check();
 await expect(page.locator('[data-hotel-card]')).toHaveCount(9);
 await panel.getByRole('checkbox',{name:'Broadway and Midtown 25 hotels',exact:true}).check();
 await expect(page.locator('[data-hotel-card]')).toHaveCount(34);
 await expect.poll(()=>new URL(page.url()).searchParams.get('plans')?.split('|').length).toBe(3);
 await page.reload();
 await expect(page.locator('[data-hotel-card]')).toHaveCount(34);
 await page.getByRole('button',{name:'Refine your search',exact:true}).click();
 await expect(panel.getByRole('checkbox',{name:'Central Park visits 9 hotels',exact:true})).toBeChecked();
 await panel.getByRole('button',{name:'Clear filters',exact:true}).click();
 await expect(page.locator('[data-hotel-card]')).toHaveCount(50);
 expect(new URL(page.url()).searchParams.get('from')).toBe('is-nyc-safe-at-night');
});

test('NYC safety guide links to selected hotel base plans and opens the filter panel',async({page})=>{
 await page.route(/googletagmanager\.com/,r=>r.abort());
 await page.route(/\/api\/auth\/get-session/,r=>r.fulfill({contentType:'application/json',body:'null'}));
 await page.goto('/destination/nyc/nyc-safety-guide');
 const cta=page.getByRole('complementary',{name:'Find NYC hotels for your plans'});
 await cta.getByRole('link',{name:'Central Park visits',exact:true}).click();
 await expect(page.locator('[data-hotel-card]')).toHaveCount(9);
 expect(new URL(page.url()).searchParams.get('from')).toBe('nyc-safety-guide');
 await page.goto('/destination/nyc/nyc-safety-guide');
 await cta.getByRole('link',{name:'Explore NYC hotel filters'}).click();
 await expect(page.getByRole('dialog',{name:'Filter hotels'})).toBeVisible();
});
