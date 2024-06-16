import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const PrimarySmall: Story = {
  args: {
    ...Primary.args,
    size: "sm",
  },
};

export const PrimaryLarge: Story = {
  args: {
    ...Primary.args,
    size: "lg",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    color: "danger",
  },
};
