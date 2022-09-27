import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./input";

export default {
  title: "caryfish/Input",
  component: Input,
  args: {
    onChange: action("changed"),
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: "test Input",
  defaultValue: "test",
};

export const Type = Template.bind({});
Type.args = {
  prepend: "https://",
  append: ".com",
  defaultValue: "baidu",
};
