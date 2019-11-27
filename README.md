# Web Components Demo

Basic demonstration of building a web component using vanilla JavaScript compared to [LitElement](https://lit-element.polymer-project.org/).

Also integrates some [visual diff testing](https://github.com/BrightspaceUI/visual-diff).

## Resources

### Web Components

* [Vanilla Custom Elements Overview](https://developers.google.com/web/fundamentals/web-components/customelements)
* [Open-WC Project](https://open-wc.org/)
* [Polyfill](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs)
* [LitElement](https://lit-element.polymer-project.org/)
* [LitHtml](https://lit-html.polymer-project.org/guide)
* [Custom Elements Everywhere](https://custom-elements-everywhere.com/)

### Visual Diff

* [Visual Diff Library](https://github.com/BrightspaceUI/visual-diff)
* [Puppeteer](https://github.com/puppeteer/puppeteer)
* [PixelMatch](https://github.com/mapbox/pixelmatch)
* [Percy.io](https://percy.io/)
* [Chromatic](https://www.chromaticqa.com/)
* [SauceLabs](https://saucelabs.com/)

## Setup

Clone the repo and run:

```shell
npm install
```

## Run the Demos

To start a development server that hosts the demos, run:

```shell
npm run start
```

Then visit the URL output to the console.

By default, `index.html` loads the vanilla web component (`vanilla.js`). To use Lit instead, switch it to load `lit.js`.

## Visual Diff Testing

To set a baseline set of golden screenshots, run:

```shell
npm run visual-diff:golden
```

To compare against the goldens, run:

```shell
npm run visual-diff
```