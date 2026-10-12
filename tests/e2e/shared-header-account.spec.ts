import {test,expect} from '@playwright/test';
for(const route of ['/destination/orlando/is-orlando-safe-at-night','/destination/orlando/neighborhood-guide','/destination/la/solo-trip-to-la','/destination/lasvegas/food','/about']){
 test(`${route} header has the shared account menu`,async({page})=>{
  await page.route(/googletagmanager\.com/,r=>r.abort());
  await page.route(/\/api\/auth\/get-session/,r=>r.fulfill({contentType:'application/json',body:'null'}));
  await page.goto(route);
  const account=page.getByRole('button',{name:'Account menu',exact:true});
  await expect(account).toHaveCount(1);await account.click();
  await expect(page.getByRole('menuitem',{name:'Sign in',exact:true})).toBeVisible();
  await page.keyboard.press('Escape');
  await page.setViewportSize({width:390,height:844});await page.reload();
  const toggle=page.getByRole('button',{name:/^(Open menu|Toggle menu)$/});
  if(await toggle.count())await toggle.click();
  await expect(account).toBeVisible();await account.click();
  await expect(page.getByRole('menuitem',{name:'Create account',exact:true})).toBeVisible();
 });
}
