import WebpackUserscript from 'webpack-userscript'
import pkg from './package.json'

interface IUserscriptConfig {
  /** script file name, without file extension*/
  scriptFileName: string
  /** 
   * url that userscript works on
   *  webpack will auto open this url after running yarn dev if it's set
   **/
  openTargetPage?: string
  /**
   * whether open user script install page after running yarn dev
   *  you only need to install the user script once unless you changed the script headers or script file name
   **/
  openScriptInstallPage?: boolean
  /** 
   * user script headers
   *  including script name, description, match url, grants and so on
   *  see https://www.tampermonkey.net/documentation.php for details
   **/
  scriptHeaders: WebpackUserscript.WPUSOptions['headers']
}

const config: IUserscriptConfig = {
  scriptFileName: pkg.name,
  openTargetPage: 'https://github.com/',
  openScriptInstallPage: true,
  scriptHeaders: {
    name: pkg.name,
    'name:zh-CN': 'webpack userscript 模版',
    description: pkg.description,
    'description:zh-CN': '使用当前流行的前端技术开发 userscript 并使用 webpack 构建',
    version: pkg.version,
    author: 'Saiya',
    namespace: 'https://app.userscript.com',
    homepageURL: 'https://github.com/oe/download-git-userscript',
    supportURL: 'https://github.com/oe/download-git-userscript/issues',
    connect: ['raw.githubusercontent.com'],
    match: ['https://github.com/*', 'https://gist.github.com/*'],
    grant: ['GM_download', 'GM_xmlhttpRequest', 'GM_setClipboard'],
    noframes: true
  }
}

export default config