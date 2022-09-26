import React from "react";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "caryfish/Menu",
  component: Menu,
  subcomponents: {
    SubMenu,
    MenuItem,
  },
  args: {
    onSelect: action("clidked"),
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem> link1</MenuItem>
    <MenuItem disabled> disabled</MenuItem>
    <MenuItem> link2</MenuItem>
  </Menu>
);

export const Default = Template.bind({});
Default.args = {
  defaultIndex: "2",
};

export const Type = Template.bind({});
Type.args = {
  defaultIndex: "2",
  mode: "vertical",
};

const subTemplate: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem> link1</MenuItem>
    <MenuItem disabled> disabled</MenuItem>
    <SubMenu title="parent">
      <MenuItem>child1</MenuItem>
      <MenuItem>child2</MenuItem>
      <MenuItem>child3</MenuItem>
      <MenuItem disabled={true}>child3</MenuItem>
    </SubMenu>
  </Menu>
);

export const sub = subTemplate.bind({});
sub.args = {};
