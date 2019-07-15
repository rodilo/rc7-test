/*
  To extend webpack config according to:
  https://github.com/nozzle/react-static/blob/master/docs/plugins/node-api.md
*/
// import Dotenv from 'dotenv-webpack'

export default pluginOptions => ({
  webpack: (config, { defaultLoaders }) => {
    // console.log(defaultLoaders)
    // config.plugins.push(new Dotenv())
    config.entry = ["@babel/polyfill", ...config.entry];
    return config;
  }
});
