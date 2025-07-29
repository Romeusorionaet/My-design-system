const config = {
  stories: [
    "../packages/react/src/**/*.mdx",
    "../packages/react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  docs: {
    defaultName: "Documentation",
  },
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    argTypeTargetsV7: true,
  },
};
export default config;
