const path = require('path')
const WebpackUserscript = require('webpack-userscript')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const pkg = require('./package.json')

const outputPath = path.resolve(__dirname, 'dist')
const isDev = process.env.NODE_ENV === 'development'
const PORT = 8080
const enableHTTPS = true

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    path: outputPath,
    filename: `${pkg.name}.js`
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  optimization: {
    minimize: !isDev
  },
  devServer: {
    https: enableHTTPS,
    port: PORT,
    writeToDisk: true,
    contentBase: outputPath,
    hot: false,
    inline: false,
    liveReload: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackUserscript({
      headers ({ name, version }) {
        return {
          name: 'webpack userscript template',
          'name:zh-CN': 'webpack userscript 模版',
          version: version,
          author: 'Saiya',
          namespace: 'https://app.userscript.com',
          description: 'userscript developed with modern tech powered by webpack',
          'description:zh-CN': '使用当前流行的前端技术开发 userscript 并使用 webpack 构建',
          homepageURL: 'https://github.com/oe/download-git-userscript',
          supportURL: 'https://github.com/oe/download-git-userscript/issues',
          connect: ['raw.githubusercontent.com'],
          match: ['https://github.com/*', 'https://gist.github.com/*'],
          grant: ['GM_download', 'GM_xmlhttpRequest', 'GM_setClipboard'],
          noframes: true
        }
      },
      proxyScript: {
        baseUrl: 'file://' + encodeURI(outputPath),
        enable: isDev
      },
      pretty: isDev
    })
  ]
}
