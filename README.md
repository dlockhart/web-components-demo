# Web Components Demo

Basic demonstration of building a web component using vanilla JavaScript compared to [LitElement](https://lit-element.polymer-project.org/).

Also integrates some [visual diff testing](https://github.com/BrightspaceUI/visual-diff).

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