// https://github.com/HenrikJoreteg/hjs-webpack
var _ = require('lodash')
var getConfig = require('hjs-webpack')
var webpackConfig = getConfig({
  in: 'src/bootstrap.js',
  out: 'public',
  clearBeforeBuild: true
})

/*
Enable CSS-Modules for all hjs loaders using 'css-loader'.
*/
function replaceLoader (match, replacer) {
  return function (l) {
    if (l && l.loader && l.loader.match(match)) {
      l.loader = l.loader.replace(match, replacer)
    }
  }
}
var cssDevIdent = webpackConfig.plugins[0].config.isDev ? '[path][name]___[local]___' : ''
var cssModulesLoader = `?modules&localIdentName=${cssDevIdent}[hash:base64:5]`
var cssModuleMatch = /(^|!)(css-loader)($|!)/
webpackConfig.module.loaders.forEach(replaceLoader(cssModuleMatch, `$1$2${cssModulesLoader}$3`))

/*
Quick import aliases. Explicit-ish because it helps jetbrains perform import autocompletion.
*/
webpackConfig.resolve = webpackConfig.resolve || {}
webpackConfig.resolve.alias = _.defaults(webpackConfig.resolve.alias || {}, {
  styles: `${__dirname}/src/styles`,
  components: `${__dirname}/src/components`,
  models: `${__dirname}/src/models`,
  lib: `${__dirname}/src/lib`
})

module.exports = webpackConfig
