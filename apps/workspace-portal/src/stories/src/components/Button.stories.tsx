import type { Meta, StoryObj } from "@storybook/react";
import Button from '@workspace/button'

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "delete"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    label: "My Button",
    variant: "primary",
  },
};
