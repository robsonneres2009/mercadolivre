import { render, screen } from "@testing-library/react";
import BreadCrump from "./index";
import "@testing-library/jest-dom";

describe("Breadcrump", () => {
  it("render", () => {
    render(<BreadCrump data-testid="breadcrump" />);

    const testID = screen.getByTestId("breadcrump");

    expect(testID).toBeInTheDocument();
  });

  it("render with strings", () => {
    render(
      <BreadCrump
        data-testid="breadcrump"
        string={["item1", "item2", "item3"]}
      />
    );

    const testID = screen.getByTestId("breadcrump");

    expect(testID).toBeInTheDocument();
  });
});
