import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Context, { ContextAPI } from "./context";

jest.mock("next/router", () => require("next-router-mock"));

describe("Context", () => {
  it("render", () => {
    render(<Context />);

    const component = screen.getByTestId("context");

    expect(component).toBeInTheDocument();
  });
});
