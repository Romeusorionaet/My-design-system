import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, type InputProps } from "../components/input";

const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    state: "default",
    size: "default",
    withClear: false,
    disabled: false,
  },
  argTypes: {
    state: {
      options: ["default", "success", "error"],
      description: "Estado",
      control: {
        type: "inline-radio",
      },
    },

    size: {
      options: ["default", "large", "compact", "mini"],
      description: "Tamanhos",
      control: {
        type: "inline-radio",
      },
    },

    withClear: {
      description: "Limpeza rápida",
      control: {
        type: "boolean",
      },
    },

    disabled: {
      description: "Desabilitar/Habilitar",
      control: {
        type: "boolean",
      },
    },

    onClick: {
      action: "click",
    },
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Success: Story = {
  args: {
    state: "success",
  },
};
export const Error: Story = {
  args: {
    state: "error",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
