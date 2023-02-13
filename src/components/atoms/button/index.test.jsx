import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("render", () => {
    render(<Button />);

    const testID = screen.getByTestId("button");

    expect(testID).toBeInTheDocument();
  });

  it("onClick", () => {
    let mockFunction = jest.fn();
    render(<Button onClick={mockFunction} />);

    const button = screen.getByTestId("button");

    fireEvent.click(button);

    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
