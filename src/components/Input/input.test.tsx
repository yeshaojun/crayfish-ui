import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Input, InputProps } from "./input";

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: "test-input",
};

describe("test Input component", () => {
  it("should render the correct default Input", () => {
    const wrapper = render(<Input {...defaultProps}></Input>);
    const testNode = wrapper.getByPlaceholderText(
      "test-input"
    ) as HTMLInputElement;
    expect(testNode).toBeInTheDocument();
    expect(testNode).toHaveClass("crayfish-input-inner");
    fireEvent.change(testNode, { target: { value: "test" } });
    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(testNode.value).toEqual("test");
  });

  it("should render the disabled Input", () => {
    const wrapper = render(<Input disabled placeholder="disabled"></Input>);
    const testNode = wrapper.getByPlaceholderText(
      "disabled"
    ) as HTMLInputElement;
    expect(testNode.disabled).toBeTruthy();
  });

  it("should render the different Input sizes", () => {
    const wrapper = render(<Input placeholder="sizes" size="lg" />);
    const testContainer = wrapper.container.querySelector(
      ".crayfish-input-wrapper"
    );
    expect(testContainer).toHaveClass("input-size-lg");
  });

  it("should render prepand and append element", () => {
    const { queryByText, container } = render(
      <Input placeholder="pend" prepend="https://" append=".com" />
    );
    const testContainer = container.querySelector(".crayfish-input-wrapper");
    expect(testContainer).toHaveClass(
      "input-group input-group-append input-group-prepend"
    );
    expect(queryByText("https://")).toBeInTheDocument();
    expect(queryByText(".com")).toBeInTheDocument();
  });
});
