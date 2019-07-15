/*
  To extend webpack config according to:
  https://github.com/nozzle/react-static/blob/master/docs/plugins/node-api.md
*/

export default pluginOptions => ({
  webpack: config => {
    config.entry = ["@babel/polyfill", ...config.entry];
    return config;
  }
});
