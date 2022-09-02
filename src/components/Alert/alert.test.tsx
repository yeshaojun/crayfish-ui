import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Alert, AlertProps } from "./alert";

const defaultProps: AlertProps = {
  message: "nihao",
};

describe("render alert component", () => {
  it("render default alert", () => {
    const wrapper = render(<Alert {...defaultProps}></Alert>);
    const element = wrapper.getByText("nihao");
    expect(element).toBeInTheDocument();
    expect(wrapper.container.tagName).toEqual("DIV");
    expect(wrapper.container.children[0]).toHaveClass("alert alert-success");
  });

  it("sets data attributes on input", () => {
    const { container } = render(
      <Alert data-test="test-id" data-id="12345" message="" />
    );
    const input = container.querySelector(".alert")!;
    expect(input.getAttribute("data-test")).toBe("test-id");
    expect(input.getAttribute("data-id")).toBe("12345");
  });

  it("support closeIcon", () => {
    const { container } = render(
      <Alert
        closeable
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warn"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("could be closed ", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Alert
        closeable
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warn"
        afterClose={onClose}
      />
    );
    fireEvent.click(container.querySelector(".alert-close-icon")!);
    expect(onClose).toHaveBeenCalled();
  });
});
