module.exports = function (api) {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = ['styled-jsx/babel'];

  return {
    presets,
    plugins,
  };
};
