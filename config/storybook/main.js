module.exports = {
  features: {
    postcss: false,
  },
core: {
    builder: "webpack5"
  },
staticDirs: ['../../orig/' ],
addons: ['@storybook/addon-actions'],
};
