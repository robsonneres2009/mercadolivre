import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import mockRouter from "next-router-mock";
import Home from "./index";

jest.mock("next/router", () => require("next-router-mock"));
const useContext = {
  setQuery: jest.fn(),
};
const useStateSpy = jest.spyOn(React, "useContext");
useStateSpy.mockImplementation(() => useContext);
mockRouter.push("/search");

describe("Home", () => {
  it("render", () => {
    render(<Home />);

    const home = screen.getByTestId("home");

    expect(home).toBeInTheDocument();
  });
});
