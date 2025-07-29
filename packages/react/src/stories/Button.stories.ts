import { Button, type ButtonProps } from "../components/button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Primary",
    variant: "primary",
    size: "default",
    shape: "default",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "ghost",
        "outline",
        "danger",
        "success",
        "warning",
      ],
      description: "Variações",
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

    shape: {
      options: ["default", "square", "circle"],
      description: "Formas",
      control: {
        type: "inline-radio",
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
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    shape: "default",
    children: "Secondary",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    shape: "default",
    children: "Ghost",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    shape: "default",
    children: "Outline",
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
    size: "default",
    shape: "default",
    children: "Danger",
  },
};
export const Success: Story = {
  args: {
    variant: "success",
    size: "default",
    shape: "default",
    children: "Success",
  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
    size: "default",
    shape: "default",
    children: "Warning",
  },
};
