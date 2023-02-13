import { render, screen } from "@testing-library/react";
import { Loading } from "./index";
import "@testing-library/jest-dom";

describe("Loading", () => {
  it("render", () => {
    render(<Loading data-testid="loading" />);

    const testID = screen.getByTestId("loading");

    expect(testID).toBeInTheDocument();
  });
});
