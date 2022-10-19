module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/styles/*.stories.@(js|mdx)",
    "../src/stories/*.stories.js",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-knobs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
