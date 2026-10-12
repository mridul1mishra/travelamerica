import {test,expect} from '@playwright/test';
test.beforeEach(async({page})=>{await page.route(/googletagmanager\.com/,r=>r.abort());await page.route(/\/api\/auth\/get-session/,r=>r.fulfill({contentType:'application/json',body:'null'}));});
for(const route of ['/destination/orlando/is-orlando-safe-at-night','/destination/nyc/hotel','/about']){
 test(`${route} uses the shared city dropdown navigation`,async({page})=>{
  await page.goto(route);
  const nav=page.getByRole('navigation',{name:'Primary navigation',exact:true});
  for(const city of ['New York','Los Angeles','Las Vegas','Orlando'])await expect(nav.getByRole('button',{name:city,exact:true})).toBeVisible();
  const trigger=nav.getByRole('button',{name:'Orlando',exact:true});await trigger.click();
  const list=nav.getByRole('list',{name:'Orlando pages',exact:true});await expect(list.getByRole('link',{name:'Solo travel for women',exact:true})).toHaveAttribute('href','/destination/orlando/orlando-female-solo-travel-guide');
  await expect(list.getByRole('link')).toHaveCount(4);
  await page.keyboard.press('Escape');await expect(list).toHaveCount(0);await expect(trigger).toBeFocused();
  await page.setViewportSize({width:390,height:844});await page.reload();
  await nav.getByRole('button',{name:'Toggle menu',exact:true}).click();
  await nav.getByRole('button',{name:'New York',exact:true}).click();
  await nav.getByRole('list',{name:'New York pages',exact:true}).getByRole('link',{name:'Safety at night',exact:true}).click();
  await expect(page).toHaveURL(/\/destination\/nyc\/is-nyc-safe-at-night$/);
  await expect(nav.getByRole('button',{name:'Toggle menu',exact:true})).toHaveAttribute('aria-expanded','false');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 });
}
