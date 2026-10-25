// Run with NODE_PATH pointing to a Playwright installation and
// CHROMIUM_MODULE pointing to @sparticuz/chromium/build/index.js, or
// CHROMIUM_EXECUTABLE pointing to a compatible local Chromium executable.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium: playwright } = require('playwright');
(async () => {
  const base = process.env.QA_BASE_URL || 'http://127.0.0.1:3100';
  const chromium = process.env.CHROMIUM_MODULE ? (await import(process.env.CHROMIUM_MODULE)).default : null;
  const browser = await playwright.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE || await chromium.executablePath(), args: chromium?.args || [], headless: true });
  const results = [];
  const pass = name => { results.push(name); console.log('PASS', name); };
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await page.route('https://fonts.googleapis.com/**', r => r.abort());
    await page.route('https://fonts.gstatic.com/**', r => r.abort());
    let response = await page.goto(base); assert.equal(response.status(), 200);
    await page.getByRole('heading', { level: 1 }).waitFor();
    assert.equal(await page.locator('footer').innerText(), '© 2026 HiveGrid Energy LLC. All rights reserved.\n“Building Trust Through Transparency”');
    assert.equal(await page.locator('h1').evaluate(e => getComputedStyle(e).color), 'rgb(0, 255, 255)');
    assert.equal(await page.locator('img').first().evaluate(e => e.complete && e.naturalWidth > 0), true);
    pass('Homepage, approved footer, brand color and logo');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to main content');
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
    pass('Keyboard skip link reaches main content');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(base);
    const toggle = page.locator('#mobile-menu-toggle');
    await toggle.click(); assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
    await page.locator('#hive-mobile-menu a').first().focus();
    await page.keyboard.press('Escape'); assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'mobile-menu-toggle');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    pass('Mobile navigation opens, Escape closes and restores focus; no document overflow');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.locator('.hive-mark-live').evaluate(e => getComputedStyle(e).animationName), 'none');
    pass('Reduced-motion preference disables logo animation');
    let formRequests = 0;
    await page.route('https://formsubmit.co/**', async r => { formRequests++; assert.equal(r.request().postDataJSON().email, 'qa@example.com'); await r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: 'true' }) }); });
    await page.getByLabel('Email address', { exact: true }).fill('qa@example.com');
    await page.getByRole('button', { name: 'Contact us', exact: true }).click();
    await page.getByText('Thank you. We will be in touch shortly.').waitFor(); assert.equal(formRequests, 1);
    pass('Contact accepted response renders success (intercepted; no email sent)');
    await page.unroute('https://formsubmit.co/**');
    await page.goto(base);
    await page.route('https://formsubmit.co/**', r => r.fulfill({ status: 200, contentType: 'application/json', body: '{"success":false}' }));
    await page.getByLabel('Email address', { exact: true }).fill('qa@example.com');
    await page.getByRole('button', { name: 'Contact us', exact: true }).click();
    await page.getByRole('alert').filter({ hasText: 'Could not send' }).waitFor();
    assert(await page.getByLabel('Email address', { exact: true }).isVisible());
    pass('Contact provider rejection retains form and announces error');
    await page.goto(base + '/portal');
    await page.getByLabel('Access code', { exact: true }).fill('incorrect'); await page.getByRole('button', { name: 'Enter', exact: true }).click();
    await page.getByRole('alert').filter({ hasText: 'Access denied.' }).waitFor();
    pass('Portal rejects an incorrect demo gate code');
    for (const [code, label] of [['demo', 'DEMONSTRATION · SAMPLE ONLY'], ['hivegrid-internal', 'WORKING VIEW · STILL A SANDBOX']]) {
      await page.getByLabel('Access code', { exact: true }).fill(code); await page.getByRole('button', { name: 'Enter', exact: true }).click();
      await page.getByText(label, { exact: true }).waitFor(); await page.reload(); await page.getByText(label, { exact: true }).waitFor();
      await page.getByRole('button', { name: 'Crew', exact: true }).click(); await page.getByRole('heading', { name: 'Crew view', exact: true }).waitFor();
      await page.getByRole('button', { name: 'Admin', exact: true }).click();
      await page.getByLabel('Property address *', { exact: true }).fill('999 Fictional QA Street');
      await page.getByLabel('Homeowner (sample) *', { exact: true }).fill('Fictional QA');
      await page.getByRole('button', { name: 'Add sample job', exact: true }).click(); await page.getByRole('heading', { name: 'Jobs (3)', exact: true }).waitFor();
      await page.reload(); await page.getByRole('heading', { name: 'Jobs (2)', exact: true }).waitFor();
      await page.getByRole('button', { name: 'Lock', exact: true }).click(); await page.getByLabel('Access code', { exact: true }).waitFor();
      pass(`${code === 'demo' ? 'Investor demo' : 'Administrative work'} gate, session, role views, sample reset and lock`);
    }
    response = await page.goto(base + '/energy-calculator'); assert.equal(response.status(), 200);
    await page.getByRole('heading', { name: 'This calculator is not a current HiveGrid service.' }).waitFor();
    assert.equal(await page.locator('img').evaluate(e => e.complete && e.naturalWidth > 0), true);
    pass('Archived calculator route and image remain available');
    assert.deepEqual(errors, []); pass('No browser JavaScript errors across tested routes');
    console.log(JSON.stringify({ passed: results.length, results, emailDeliveryTested: false }, null, 2));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
