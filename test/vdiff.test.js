const puppeteer = require('puppeteer');
const VisualDiff = require('@brightspace-ui/visual-diff');

describe('button-subtle', () => {

	const visualDiff = new VisualDiff('button-subtle', __dirname);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.setViewport({width: 800, height: 800, deviceScaleFactor: 2});
		await page.goto(`${visualDiff.getBaseUrl()}/test/index.html`, {waitUntil: ['networkidle0', 'load']});
		await page.bringToFront();
	});

	after(() => browser.close());

	it('normal', async function() {
		const rect = await visualDiff.getRect(page, 'button-subtle');
		await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
	});

	it('hover', async function() {

		await page.hover('button-subtle');

		const rect = await visualDiff.getRect(page, 'button-subtle');
		await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });

	});

	it('focus', async function() {
		
		await page.focus('button-subtle');

		const rect = await visualDiff.getRect(page, 'button-subtle');
		await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });

	});

	it('disabled', async function() {
		
		await page.$eval(
			'button-subtle',
			 (elem) => elem.disabled = true
		);

		const rect = await visualDiff.getRect(page, 'button-subtle');
		await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });

	});

});