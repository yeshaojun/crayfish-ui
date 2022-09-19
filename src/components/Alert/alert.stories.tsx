import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Alert from "./alert";
import Icon from "../Icon/icon";

export default {
  title: "caryfish/Alert",
  component: Alert,
  args: {
    afterClose: action("clidked"),
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;
export const Default = Template.bind({});
Default.args = {
  message: "default title",
  description: "default description",
  closeable: true,
};

export const Type = () => (
  <>
    <Alert
      message="success"
      type="success"
      description="test alert type"
    ></Alert>
    <Alert message="info" type="info" description="test alert type"></Alert>
    <Alert message="warn" type="warn" description="test alert type"></Alert>
    <Alert message="error" type="error" description="test alert type"></Alert>
  </>
);

export const Custom = () => (
  <>
    <Alert
      message="success"
      type="info"
      description="test alert type"
      showIcon={true}
      icon={<Icon icon="circle-check" theme="primary"></Icon>}
    ></Alert>
  </>
);
