import React from "react";
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>normal</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem>opened1</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
  defaultOpenSubMenus: ["4"],
};

let wrapper: RenderResult,
  wrapper2: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test menu an menuItem compoent", () => {
  // 前置操作
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });

  it("should render Menu and MenuItem on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("crayfish-menu test");
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(5);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });

  it("click items show change active and call the right callback", () => {
    const normalItem = wrapper.getByText("normal");
    fireEvent.click(normalItem);
    expect(normalItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");

    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
  });

  it("should show fropdown items when hover on subMenu", async () => {
    expect(wrapper.queryByText("drop1")).toBeNull();
    const dropdownElement = wrapper.getByText("dropdown");
    fireEvent.mouseEnter(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText("drop1")).toBeVisible();
    });
    fireEvent.click(wrapper.getByText("drop1"));
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
    fireEvent.mouseLeave(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText("drop1")).toBeNull();
    });
  });
});

describe("test menu and menuItem component in vertical mode", () => {
  beforeEach(() => {
    wrapper2 = render(generateMenu(testVerProps));
    menuElement = wrapper.getByTestId("test-menu");
  });
  it("show render vertical", () => {
    expect(menuElement).toHaveClass("crayfish-menu menu-vertical");
  });

  it("should dropdown", () => {
    expect(wrapper2.queryByText("drop1")).toBeNull();

    fireEvent.click(wrapper2.getByText("dropdown"));
    const dropDownItem = wrapper2.queryByText("drop1");
    expect(dropDownItem).toBeVisible();
  });

  it("should submenu", () => {
    expect(wrapper2.queryByText("opened1")).toBeVisible();
  });
});
