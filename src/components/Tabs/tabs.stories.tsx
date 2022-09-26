import React from "react";
import Tabs from "./tabs";
import TabPane from "./tabPane";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Icon from "../Icon/";
import Button from "../Button/";

export default {
  title: "caryfish/Tabs",
  component: Tabs,
  subcomponents: {
    TabPane,
  },
  args: {
    onSelect: action("clidked"),
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabPane tab="tab1">content 1</TabPane>
    <TabPane tab="tab2" disabled>
      content 2
    </TabPane>
    <TabPane tab="tab3">content 3</TabPane>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  active: "2",
};

const exeTemplate: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabPane tab="tab1">content 1</TabPane>
    <TabPane tab="tab2" disabled>
      content 2
    </TabPane>
    <TabPane tab="tab3">content 3</TabPane>
  </Tabs>
);

export const tabBarExtra = exeTemplate.bind({});
tabBarExtra.args = {
  active: "0",
  tabBarExtraContent: {
    left: <Icon icon="user" theme="primary"></Icon>,
    right: <Button onClick={action("clidked")}>right</Button>,
  },
};
