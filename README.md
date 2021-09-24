# Webpack userscript template
![code with typescript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)

Userscript developed with modern tech powered by webpack

> This template is based on [Webpack](https://github.com/webpack/webpack) and [webpack-userscript](https://github.com/momocow/webpack-userscript#readme), written in typescript.

## Usage

I recommend you using [Chrome](https://www.google.com/chrome/) and [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) to develop a user script. Following steps are based on these two tools.

### Prepare materials
1. create your own repo by click the green button [Use this template](https://github.com/oe/webpack-userscript-template/generate)
2. install a user script manager for your browser,  [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) is recommended for Chrome, for more alternatives just check [greasyfork](https://greasyfork.org/en#home-step-1)
 

### Configure you browser: Chrome

1. enable insecure localhost: navigate to `chrome://flags/#allow-insecure-localhost`, enable insecure localhost
2. enable file url access of extensions: navigate to `chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo`(Chrome manage extensions page of `Tampermonkey`) and enable `Allow access to file URLs` (you need to manual reload page when dev userscript, see [#475](https://github.com/Tampermonkey/tampermonkey/issues/475#issuecomment-348594785) for more detail)

### Dev
1. install dependencies by run `yarn` (or `npm i`)
2. open dev server by run `yarn dev` (or `npm run dev`)
3. <https://127.0.0.1/[your userscript name].proxy.user.js> will be open automatically in browser(click  `Advanced` -> `proceed` if it shows a security warning) to install the proxy script. by setting `openScriptInstallPage` to `false` in `userscript.config.ts` you can turn off this behavior.
4. open your target webpage to see the effect. by setting `openTargetPage` to as your target url in `userscript.config.ts` it will open that page automatically for you.
5. config userscript by modifying `userscript.config.ts`, you need to rerun `yarn dev` to make it take effect
6. config webpack by modifying `webpack.config.ts`, you need to rerun `yarn dev` to make it take effect
7. reload your target webpage after userscript changed

## Build
run cmd `yarn build`(or `npm run build`), your userscript should be in `dist` folder with extension `.user.js`

## Publish
after your script fully tested, you can build it than publish it to the world. here are some platform your can share your script:  
* [greasyfork](https://greasyfork.org/)
* [openuserjs](https://openuserjs.org/)

notice: userscript name(which can be configured via `scriptHeaders.name` in `webpack.config.ts`) is a script's identity, you should not change it's name after published.

## References
1. [userscript docs(from Tampermonkey)](https://www.tampermonkey.net/documentation.php)
2. [Webpack-userscript](https://github.com/momocow/webpack-userscript#readme)
3. [Webpack](https://webpack.js.org/configuration/)
4. [Typescript](https://www.typescriptlang.org/)