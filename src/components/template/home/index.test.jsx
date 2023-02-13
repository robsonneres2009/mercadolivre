import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./index";

jest.mock("next/router", () => require("next-router-mock"));

describe("Home", () => {
  it("render", () => {
    render(<Home />);

    const component = screen.getByTestId("home");
    expect(component).toBeInTheDocument();
  });
});
