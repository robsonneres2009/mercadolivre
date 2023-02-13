import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./index";

describe("SearchBar", () => {
  it("render", () => {
    let mockFunction = jest.fn();
    render(<SearchBar data-testid="searchbar" onChange={mockFunction} />);

    const input = screen.getByTestId("search");
    fireEvent.change(input, { target: { value: "teste" } });

    expect(input.value).toBe("teste");
  });
});
