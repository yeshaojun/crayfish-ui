import React from "react";
import {
  fireEvent,
  render,
  RenderResult,
  cleanup,
} from "@testing-library/react";
import TabPane from "./tabPane";
import Tabs, { TabsProps } from "./tabs";

const createStyleFile = () => {
  const cssFile: string = `
    .tabs-tab {
      display: none;
    }
    .tabs-tab.is-active {
      display:block;
    }
  `;
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};

const generateTabs = (props: TabsProps) => {
  return (
    <Tabs {...props}>
      <TabPane tab="tab1">content1</TabPane>
      <TabPane tab="tab2">content2</TabPane>
      <TabPane tab="tab3" disabled>
        content3
      </TabPane>
    </Tabs>
  );
};

const defaultProps: TabsProps = {
  active: "1",
  onChange: jest.fn(),
  className: "test",
  tabBarExtraContent: {
    left: <span>left content</span>,
    right: <span>right content</span>,
  },
};

let wrapper: RenderResult;
let wrapper2: RenderResult;
let tabsElement: HTMLElement;

describe("shoud tabs tabpane component test", () => {
  beforeEach(() => {
    wrapper = render(generateTabs(defaultProps));
    wrapper.container.append(createStyleFile());
    tabsElement = wrapper.getByTestId("test-tabs");
  });
  it("should tabs defaultProps", () => {
    expect(wrapper.container).toBeInTheDocument();
    expect(wrapper.queryByText("left content")).toBeInTheDocument();
    expect(wrapper.queryByText("right content")).toBeInTheDocument();

    expect(tabsElement).toHaveClass("crayfish-tabs tabs-horizontal");
    expect(tabsElement.querySelectorAll(":scope li").length).toEqual(3);

    expect(wrapper.getByText("content2")).toBeVisible();
    expect(wrapper.getByText("content2")).toHaveClass("is-active tabs-tab");
    // expect(wrapper.queryByText("content1")).not.toBeVisible();
    // expect(wrapper.queryByText("content3")).not.toBeVisible();
    expect(wrapper.getByText("tab3")).toHaveClass("is-disabled");
  });

  it("click items show change active and call the right callback", () => {
    fireEvent.click(wrapper.getByText("tab3"));
    expect(defaultProps.onChange).not.toHaveBeenCalled();

    fireEvent.click(wrapper.getByText("tab1"));
    expect(defaultProps.onChange).toHaveBeenCalledWith("0");

    expect(wrapper.getByText("content2")).not.toHaveClass("is-active");
    expect(wrapper.getByText("content1")).toHaveClass("is-active");
  });

  it("should rende tabs in vertical", () => {
    cleanup();
    wrapper2 = render(
      generateTabs({
        ...defaultProps,
        mode: "vertical",
      })
    );
    const ele2 = wrapper2.getByTestId("test-tabs");
    expect(wrapper2.container).toBeInTheDocument();
    expect(ele2).toHaveClass("crayfish-tabs tabs-vertical");
  });
});
