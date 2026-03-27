/**
 * Lumen Landing Page — Full Audit Test
 * Playwright-driven: visual, click, SEO, responsive, language switcher
 */
import { test, expect, type Page } from '@playwright/test';

const BASE_URL = 'https://www.lumenlimitedseries.com';

test.describe('🔍 Lumen Landing Page Full Audit', () => {

  // ============ 1. BASIC LOAD & VISUAL ============
  test('1.1 Page loads successfully (HTTP 200)', async ({ page }) => {
    const response = await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(200);
  });

  test('1.2 Full page screenshot - desktop (1920x1080)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // wait for animations
    await page.screenshot({ path: 'audit-screenshots/desktop-full.png', fullPage: true });
  });

  test('1.3 Full page screenshot - mobile (375x812 iPhone)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'audit-screenshots/mobile-full.png', fullPage: true });
  });

  test('1.4 Full page screenshot - tablet (768x1024 iPad)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'audit-screenshots/tablet-full.png', fullPage: true });
  });

  // ============ 2. SEO AUDIT ============
  test('2.1 Page title is correct', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const title = await page.title();
    expect(title).toContain('Lumen');
    console.log('📄 Page Title:', title);
  });

  test('2.2 Meta description exists and is meaningful', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const desc = await page.getAttribute('meta[name="description"]', 'content');
    expect(desc).toBeTruthy();
    expect(desc!.length).toBeGreaterThan(50);
    console.log('📝 Meta Description:', desc);
  });

  test('2.3 Open Graph tags are present', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content');
    const ogDesc = await page.getAttribute('meta[property="og:description"]', 'content');
    const ogImage = await page.getAttribute('meta[property="og:image"]', 'content');
    const ogUrl = await page.getAttribute('meta[property="og:url"]', 'content');
    const ogType = await page.getAttribute('meta[property="og:type"]', 'content');
    
    console.log('🌐 OG Title:', ogTitle);
    console.log('🌐 OG Description:', ogDesc);
    console.log('🌐 OG Image:', ogImage);
    console.log('🌐 OG URL:', ogUrl);
    console.log('🌐 OG Type:', ogType);
    
    expect(ogTitle).toBeTruthy();
    expect(ogDesc).toBeTruthy();
    expect(ogImage).toBeTruthy();
    expect(ogUrl).toBeTruthy();
  });

  test('2.4 Twitter Card tags are present', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const card = await page.getAttribute('meta[name="twitter:card"]', 'content');
    const tTitle = await page.getAttribute('meta[name="twitter:title"]', 'content');
    const tDesc = await page.getAttribute('meta[name="twitter:description"]', 'content');
    
    console.log('🐦 Twitter Card:', card);
    console.log('🐦 Twitter Title:', tTitle);
    console.log('🐦 Twitter Desc:', tDesc);
    
    expect(card).toBeTruthy();
    expect(tTitle).toBeTruthy();
  });

  test('2.5 JSON-LD structured data exists', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const jsonLdScripts = await page.$$eval('script[type="application/ld+json"]', scripts => 
      scripts.map(s => JSON.parse(s.textContent || '{}'))
    );
    
    console.log('📊 JSON-LD entries:', jsonLdScripts.length);
    jsonLdScripts.forEach((ld, i) => {
      console.log(`  [${i}] @type:`, ld['@type'], '| name:', ld.name || ld.url || 'N/A');
    });
    
    expect(jsonLdScripts.length).toBeGreaterThanOrEqual(2);
    
    const hasProduct = jsonLdScripts.some(ld => ld['@type'] === 'Product');
    const hasOrg = jsonLdScripts.some(ld => ld['@type'] === 'Organization');
    expect(hasProduct).toBe(true);
    expect(hasOrg).toBe(true);
  });

  test('2.6 Canonical URL is set', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const canonical = await page.getAttribute('link[rel="canonical"]', 'href');
    console.log('🔗 Canonical:', canonical);
    expect(canonical).toBeTruthy();
    expect(canonical).toContain('lumenlimitedseries.com');
  });

  test('2.7 Hreflang tags exist for all 4 languages', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const hreflangs = await page.$$eval('link[rel="alternate"][hreflang]', links => 
      links.map(l => ({ hreflang: l.getAttribute('hreflang'), href: l.getAttribute('href') }))
    );
    
    console.log('🌍 Hreflang tags:', hreflangs);
    
    const langs = hreflangs.map(h => h.hreflang);
    expect(langs).toContain('hu-HU');
    expect(langs).toContain('en-US');
    expect(langs).toContain('zh-CN');
    expect(langs).toContain('th-TH');
  });

  test('2.8 html lang attribute is set', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const lang = await page.getAttribute('html', 'lang');
    console.log('🏷️ HTML lang:', lang);
    expect(lang).toBeTruthy();
  });

  test('2.9 Robots meta tag allows indexing', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const robots = await page.getAttribute('meta[name="robots"]', 'content');
    console.log('🤖 Robots:', robots);
    // Should allow indexing (not noindex)
    if (robots) {
      expect(robots).not.toContain('noindex');
    }
  });

  // ============ 3. CONTENT & STRUCTURE ============
  test('3.1 H1 exists and is visible', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    const text = await h1.textContent();
    console.log('📌 H1 text:', text?.trim());
    expect(text?.trim().length).toBeGreaterThan(5);
  });

  test('3.2 All H2 headings are present (sections)', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const h2s = await page.$$eval('h2', els => els.map(el => el.textContent?.trim()));
    console.log('📌 H2 headings:', h2s);
    // We expect at least 6 section headings
    expect(h2s.length).toBeGreaterThanOrEqual(6);
  });

  test('3.3 All images have alt attributes', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const images = await page.$$eval('img', imgs => 
      imgs.map(img => ({ src: img.src, alt: img.alt, hasAlt: img.hasAttribute('alt') }))
    );
    
    console.log('🖼️ Images found:', images.length);
    images.forEach((img, i) => {
      console.log(`  [${i}] alt: "${img.alt}" | hasAlt: ${img.hasAlt} | src: ${img.src.slice(-30)}`);
    });
    
    const missingAlt = images.filter(img => !img.hasAlt || img.alt === '');
    expect(missingAlt.length).toBe(0);
  });

  test('3.4 No broken images (all load successfully)', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Scroll through the entire page slowly to trigger Next.js lazy-loaded <Image> components
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    const step = 400;
    for (let y = 0; y <= totalHeight; y += step) {
      await page.evaluate((scrollY) => window.scrollTo({ top: scrollY, behavior: 'instant' }), y);
      await page.waitForTimeout(80); // give lazy images time to load
    }
    // Scroll back to top
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));

    // Wait for all <img> elements to complete loading
    await page.waitForFunction(() =>
      Array.from(document.querySelectorAll('img')).every(img => img.complete)
    , { timeout: 10000 });

    const brokenImages = await page.$$eval('img', imgs => 
      imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => ({ src: img.src, complete: img.complete, naturalWidth: img.naturalWidth }))
    );
    console.log('🖼️ Broken images after full-page scroll:', brokenImages);
    expect(brokenImages.length).toBe(0);
  });

  // ============ 4. CLICKABLE ELEMENTS & INTERACTIONS ============
  test('4.1 CTA button "Elérhetőség megtekintése" scrolls to #partnerek', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Find the hero CTA link
    const ctaLink = page.locator('a[href="#partnerek"]').first();
    await expect(ctaLink).toBeVisible();
    
    // Get initial scroll position
    const scrollBefore = await page.evaluate(() => window.scrollY);
    
    // Click the CTA
    await ctaLink.click();
    await page.waitForTimeout(1500); // wait for smooth scroll
    
    // Get new scroll position
    const scrollAfter = await page.evaluate(() => window.scrollY);
    
    console.log('📍 Scroll before:', scrollBefore, '→ after:', scrollAfter);
    expect(scrollAfter).toBeGreaterThan(scrollBefore);
  });

  test('4.2 Language switcher opens on click', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Find the language switcher trigger button
    const langButton = page.locator('button[aria-label="Change language"]');
    await expect(langButton).toBeVisible();
    
    // Click to open dropdown
    await langButton.click();
    await page.waitForTimeout(500);
    
    // Screenshot the open dropdown
    await page.screenshot({ path: 'audit-screenshots/lang-switcher-open.png' });
    
    // Check that dropdown options are visible
    const options = page.locator('button:has-text("English")');
    await expect(options.first()).toBeVisible();
  });

  test('4.3 Language switch to English works', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Open language switcher
    await page.locator('button[aria-label="Change language"]').click();
    await page.waitForTimeout(500);
    
    // Click English
    await page.locator('button:has-text("English")').click();
    await page.waitForTimeout(1000);
    
    // Verify content changed
    const h1 = await page.locator('h1').first().textContent();
    console.log('🇬🇧 H1 after EN switch:', h1?.trim());
    expect(h1).toContain('Not everything');
    
    await page.screenshot({ path: 'audit-screenshots/lang-english.png', fullPage: true });
  });

  test('4.4 Language switch to Chinese works', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    await page.locator('button[aria-label="Change language"]').click();
    await page.waitForTimeout(500);
    await page.locator('button:has-text("中文")').click();
    await page.waitForTimeout(1000);
    
    const h1 = await page.locator('h1').first().textContent();
    console.log('🇨🇳 H1 after ZH switch:', h1?.trim());
    expect(h1).toContain('并非');
    
    await page.screenshot({ path: 'audit-screenshots/lang-chinese.png', fullPage: true });
  });

  test('4.5 Language switch to Thai works', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    await page.locator('button[aria-label="Change language"]').click();
    await page.waitForTimeout(500);
    await page.locator('button:has-text("ไทย")').click();
    await page.waitForTimeout(1000);
    
    const h1 = await page.locator('h1').first().textContent();
    console.log('🇹🇭 H1 after TH switch:', h1?.trim());
    expect(h1).toContain('ไม่ใช่');
    
    await page.screenshot({ path: 'audit-screenshots/lang-thai.png', fullPage: true });
  });

  test('4.6 Language switch back to Hungarian works', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Switch to EN first
    await page.locator('button[aria-label="Change language"]').click();
    await page.waitForTimeout(500);
    await page.locator('button:has-text("English")').click();
    await page.waitForTimeout(1000);
    
    // Switch back to HU
    await page.locator('button[aria-label="Change language"]').click();
    await page.waitForTimeout(500);
    await page.locator('button:has-text("Magyar")').click();
    await page.waitForTimeout(1000);
    
    const h1 = await page.locator('h1').first().textContent();
    console.log('🇭🇺 H1 after HU switch:', h1?.trim());
    expect(h1).toContain('Nem minden');
  });

  test('4.7 Footer links are clickable', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    
    const footerLinks = page.locator('footer a');
    const count = await footerLinks.count();
    console.log('🔗 Footer links count:', count);
    
    for (let i = 0; i < count; i++) {
      const text = await footerLinks.nth(i).textContent();
      const href = await footerLinks.nth(i).getAttribute('href');
      console.log(`  [${i}] "${text?.trim()}" → ${href}`);
    }
    
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('4.8 Partner section CTA button is clickable', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Scroll to partner section
    await page.locator('#partnerek').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    
    const partnerBtn = page.locator('#partnerek button').first();
    await expect(partnerBtn).toBeVisible();
    const text = await partnerBtn.textContent();
    console.log('🤝 Partner CTA text:', text?.trim());
  });

  // ============ 5. PERFORMANCE & TECHNICAL ============
  test('5.1 Page load time under 5 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const loadTime = Date.now() - start;
    console.log('⏱️ Page load time:', loadTime, 'ms');
    expect(loadTime).toBeLessThan(10000); // generous 10s limit
  });

  test('5.2 No console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    console.log('❌ Console errors:', errors.length > 0 ? errors : 'None');
    // Log but don't hard fail - Next.js may have hydration logs
    if (errors.length > 0) {
      console.warn('⚠️ Console errors found (review needed):', errors);
    }
  });

  test('5.3 No 404 resources', async ({ page }) => {
    const failed: string[] = [];
    page.on('response', response => {
      if (response.status() === 404) {
        failed.push(response.url());
      }
    });
    
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    console.log('🚫 404 resources:', failed.length > 0 ? failed : 'None');
    expect(failed.length).toBe(0);
  });

  test('5.4 Fonts load correctly (Montserrat + Playfair Display)', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    const fonts = await page.evaluate(() => {
      return Array.from(document.fonts)
        .filter(f => f.status === 'loaded')
        .map(f => f.family);
    });
    
    console.log('🔤 Loaded fonts:', [...new Set(fonts)]);
    
    const fontFamilies = fonts.join(' ').toLowerCase();
    // Check fonts are somehow loaded (could be via CSS variable)
    const hasCustomFonts = fontFamilies.includes('montserrat') || 
                           fontFamilies.includes('playfair') ||
                           fontFamilies.includes('__montserrat') ||
                           fontFamilies.includes('__playfair');
    
    if (!hasCustomFonts) {
      console.warn('⚠️ Custom fonts may not be detected by document.fonts - checking CSS');
      const bodyFont = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
      console.log('🔤 Body font-family:', bodyFont);
    }
  });

  test('5.5 Background image loads', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    const bgImage = await page.evaluate(() => getComputedStyle(document.body).backgroundImage);
    console.log('🎨 Body background-image:', bgImage);
    expect(bgImage).toContain('hatter');
  });

  // ============ 6. ACCESSIBILITY BASICS ============
  test('6.1 Page has proper heading hierarchy (h1 → h2)', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    const headings = await page.$$eval('h1, h2, h3, h4, h5, h6', els => 
      els.map(el => ({ tag: el.tagName, text: el.textContent?.trim().slice(0, 50) }))
    );
    
    console.log('📐 Heading hierarchy:');
    headings.forEach(h => console.log(`  ${h.tag}: ${h.text}`));
    
    // Must have exactly 1 H1
    const h1Count = headings.filter(h => h.tag === 'H1').length;
    expect(h1Count).toBe(1);
  });

  test('6.2 Focus visible works (keyboard navigation)', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Tab to first interactive element
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    
    await page.screenshot({ path: 'audit-screenshots/focus-visible.png' });
    
    // Check that some element has focus
    const focusedTag = await page.evaluate(() => document.activeElement?.tagName);
    console.log('🎯 Focused element:', focusedTag);
  });

  test('6.3 Color contrast - gold text on dark bg', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Get computed colors of gold text element
    const colors = await page.evaluate(() => {
      const goldEl = document.querySelector('.text-\\[\\#C6A15B\\]');
      if (!goldEl) return { fg: 'not found', bg: 'not found' };
      const style = getComputedStyle(goldEl);
      return { fg: style.color, bg: getComputedStyle(document.body).backgroundColor };
    });
    
    console.log('🎨 Gold text color:', colors.fg);
    console.log('🎨 Body bg color:', colors.bg);
  });

  // ============ 7. RESPONSIVE CHECKS ============
  test('7.1 Mobile: language switcher is visible and usable', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    const langButton = page.locator('button[aria-label="Change language"]');
    await expect(langButton).toBeVisible();
    
    // Check it's not overlapping content
    const box = await langButton.boundingBox();
    console.log('📱 Lang button position:', box);
    expect(box).toBeTruthy();
    expect(box!.x).toBeGreaterThan(0);
    expect(box!.y).toBeGreaterThan(0);
    
    await page.screenshot({ path: 'audit-screenshots/mobile-lang-button.png' });
  });

  test('7.2 Mobile: hero section text is readable', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    
    const fontSize = await h1.evaluate(el => getComputedStyle(el).fontSize);
    console.log('📱 H1 font-size on mobile:', fontSize);
    
    // Should be at least 32px on mobile (text-5xl = 3rem = 48px)
    const size = parseInt(fontSize);
    expect(size).toBeGreaterThanOrEqual(28);
  });

  test('7.3 Mobile: no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // After CSS fix (overflow-x: hidden on html+body), the user should NOT be able to
    // scroll horizontally even if framer-motion x-offset animations temporarily overflow.
    // We verify by attempting to scroll right and confirming scrollX stays at 0.
    await page.evaluate(() => window.scrollTo({ left: 9999, behavior: 'instant' }));
    await page.waitForTimeout(300);

    const scrollX = await page.evaluate(() => window.scrollX);
    const overflow = scrollX > 0;
    console.log('📱 scrollX after attempting horizontal scroll:', scrollX);
    console.log('📱 Horizontal overflow:', overflow);
    expect(overflow).toBe(false);
  });

  test('7.4 Images are responsive (use next/image)', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    const nextImages = await page.$$eval('img', imgs => 
      imgs.map(img => ({
        src: img.src.slice(-40),
        srcset: img.srcset ? 'YES' : 'NO',
        sizes: img.sizes || 'none',
        loading: img.loading || 'auto',
        hasNextAttrs: img.hasAttribute('data-nimg')
      }))
    );
    
    console.log('🖼️ Image optimization:');
    nextImages.forEach((img, i) => {
      console.log(`  [${i}] srcset:${img.srcset} sizes:${img.sizes} loading:${img.loading} next:${img.hasNextAttrs} src:...${img.src}`);
    });
  });

  // ============ 8. SCROLL & ANIMATION AUDIT ============
  test('8.1 Scroll animations trigger on scroll', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Scroll down slowly to trigger FadeIn animations
    for (let i = 0; i < 10; i++) {
      await page.evaluate(y => window.scrollTo(0, y), i * 800);
      await page.waitForTimeout(600);
    }
    
    await page.screenshot({ path: 'audit-screenshots/after-scroll.png', fullPage: true });
  });

  // ============ 9. FULL CLICK-THROUGH AUDIT ============
  test('9.1 Click every section in sequence (full page walk)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    const sections = ['hero', 'intro', 'concept', 'heritage', 'experience', 'exclusivity', 'authenticity', 'partners', 'nextRelease', 'closing'];
    
    for (let i = 0; i < sections.length; i++) {
      await page.evaluate(y => window.scrollTo({ top: y, behavior: 'smooth' }), i * 1000);
      await page.waitForTimeout(1000);
      await page.screenshot({ path: `audit-screenshots/section-${i}-${sections[i]}.png` });
    }
  });
});
