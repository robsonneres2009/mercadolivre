import { render, screen } from "@testing-library/react";
import Logo from "./index";
import "@testing-library/jest-dom";

describe("Loading", () => {
  it("render", () => {
    render(<Logo data-testid="logo" />);

    const testID = screen.getByTestId("logo");

    expect(testID).toBeInTheDocument();
  });
});
