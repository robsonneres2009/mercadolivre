import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Info from "./index";

describe("Info", () => {
  it("render", () => {
    const info = {
      item: {
        picture: null,
        sold_quantity: "",
        title: "",
        price: { amount: "" },
        description: "",
      },
    };
    render(<Info info={info} />);
    const component = screen.getByTestId("info");
    expect(component).toBeInTheDocument();
  });
});
