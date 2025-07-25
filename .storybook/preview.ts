import type { Preview } from "@storybook/react-vite";
import { themes } from "storybook/internal/theming";
import Doc from "../src/stories/doc.mdx";
import "../src/assets/styles/global.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
      page: Doc,
    },
  },
};

export default preview;
