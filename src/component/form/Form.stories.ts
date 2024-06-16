import { Meta, StoryObj } from "@storybook/react";
import { FormEvent } from "react";
import { Form } from "./Form";

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
}

export default meta;
type Story = StoryObj<typeof Form>

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  for (let [name, value] of formData.entries()) {
    console.log(`name: ${name}, value: ${value}`);
  }
}

export const DefaultForm: Story = {
  args: {
    fields: [{ name: "name", type: "text", label: "名前" }, { name: "passwd", type: "password", label: "パスワード" }],
    color: "black",
    onSubmit: handleSubmit
  }
}

export const PinkForm: Story = {
  args: {
    fields: [{ name: "name", type: "text", label: "名前" }, { name: "passwd", type: "password", label: "パスワード" }],
    color: "pink",
    onSubmit: handleSubmit
  }
}

export const AddAgeForm: Story = {
  args: {
    fields: [{ name: "name", type: "text", label: "名前" }, { name: "passwd", type: "password", label: "パスワード" }, { name: "age", type: "number", label: "年齢" }],
    color: "black",
    onSubmit: handleSubmit
  }
}
