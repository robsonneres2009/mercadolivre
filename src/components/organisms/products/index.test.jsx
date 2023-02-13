import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "./index";

jest.mock("next/router", () => require("next-router-mock"));

describe("Products", () => {
  it("render", () => {
    const products = [
      { id: "1" },
      { id: "2" },
      { id: "3" },
      { id: "4" },
      { id: "5" },
      { id: "6" },
    ];
    render(<Products products={products} />);

    const component = screen.getByTestId("products");
    expect(component).toBeInTheDocument();
  });
});
