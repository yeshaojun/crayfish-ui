import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export default {
  title: "caryfish/Button",
  component: Button,
  args: {
    onClick: action("clidked"),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "defaultt",
};

export const Type = () => (
  <>
    <Button btnType="primary">primary</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="default">default</Button>
    <Button btnType="link">link</Button>
  </>
);

export const Size = () => (
  <>
    <Button size="lg">lg</Button>
    <Button size="sm">sm</Button>
  </>
);
