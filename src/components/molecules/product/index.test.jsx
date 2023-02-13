import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./index";

describe("Product", () => {
  it("render", () => {
    const mockFunction = jest.fn();
    const item = {
      id: "",
      thumbnail: "",
      price: "",
      title: "",
      address: { state_name: "" },
    };
    render(<Product onClick={mockFunction} item={item} />);

    const product = screen.getByTestId("product");
    fireEvent.click(product);

    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
