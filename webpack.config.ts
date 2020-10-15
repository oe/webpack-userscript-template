import path from 'path'
import webpack from 'webpack'
import WebpackUserscript from 'webpack-userscript'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import userscriptConfig from './userscript.config'

const outputPath = path.resolve(__dirname, 'dist')
const isDev = process.env.NODE_ENV === 'development'
const PORT = 8080
const enableHTTPS = true

const devServerOpenPage: string[] = (() => {
  const pages: string[] = []
  if (userscriptConfig.openScriptInstallPage) {
    pages.push(`${enableHTTPS ? 'https' : 'http'}://127.0.0.1:${PORT}/${userscriptConfig.scriptFileName}.proxy.user.js`)
  }
  if (userscriptConfig.openTargetPage) {
    pages.push(userscriptConfig.openTargetPage)
  }
  return pages
})()


const config: webpack.Configuration = {
  mode: 'production',
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    path: outputPath,
    filename: `${userscriptConfig.scriptFileName}.js`
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
    open: !!(userscriptConfig.openTargetPage && userscriptConfig.openScriptInstallPage),
    openPage: devServerOpenPage,
    hot: false,
    inline: false,
    liveReload: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackUserscript({
      headers: userscriptConfig.scriptHeaders,
      proxyScript: {
        baseUrl: 'file://' + encodeURI(outputPath),
        enable: isDev
      },
      pretty: isDev
    })
  ]
}

export default config
