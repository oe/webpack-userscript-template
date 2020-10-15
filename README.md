# Webpack userscript template
![code with typescript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)

Userscript developed with modern tech powered by webpack

> This template is based on [Webpack](https://github.com/webpack/webpack) and [webpack-userscript](https://github.com/momocow/webpack-userscript#readme), written in typescript.

## Usage

I recommend you using [Chrome](https://www.google.com/chrome/) and [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) to develop a user script. Following steps are based on these two tools.

### Prepare materials
1. create your own repo by click the green button [Use this template](https://github.com/oe/webpack-userscript-template/generate)
2. install a user script manager for your browser,  [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) is recommended for Chrome, for more just check [greasyfork](https://greasyfork.org/en#home-step-1)
 

### Configure you browser: Chrome

1. enable insecure localhost: navigate to `chrome://flags/#allow-insecure-localhost`, enable insecure localhost
2. enable navigate to `chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo`(Chrome manage extensions page of `Tampermonkey`) and enable `Allow access to file URLs` (you need to manual reload page when dev userscript, see [#475](https://github.com/Tampermonkey/tampermonkey/issues/475#issuecomment-348594785) for more detail)

### Dev

1. install dependencies by run `yarn` (or `npm i`)
2. open dev server by run `yarn dev` (or `npm run dev`)
3. open <https://127.0.0.1/[your userscript name].proxy.user.js> in browser(click  `Advanced` -> `proceed` if it shows a security warning ) to install the proxy script. by setting `openScriptInstallPage` to true in `userscript.config.ts` it will open that page automatically for you.
4. open your target webpage to see the effect. by setting `openTargetPage` to as your target url in `userscript.config.ts` it will open that page automatically for you.
5. config userscript by modifying `userscript.config.ts`, you need to rerun `yarn dev` to make it take effect
6. config webpack by modifying `webpack.config.ts`, you need to rerun `yarn dev` to make it take effect
7. dev code in `src` folder, reload your target webpage after userscript changed

## Build

run cmd `yarn build`(or `npm run build`), your userscript should be in `dist` folder with extension `.user.js`

## References
1. [Tampermonkey docs](https://www.tampermonkey.net/documentation.php)