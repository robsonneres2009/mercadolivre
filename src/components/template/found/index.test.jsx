import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import mockRouter from "next-router-mock";
import Found from "./index";

jest.mock("axios");
jest.mock("next/router", () => require("next-router-mock"));
const useContext = {
  setQuery: jest.fn(),
  setProducts: jest.fn(),
  setCategories: jest.fn(),
  getProducts: () => Promise.resolve({ status: 200 }),
};
const useStateSpy = jest.spyOn(React, "useContext");
useStateSpy.mockImplementation(() => useContext);

mockRouter.push("/search");

describe("Found", () => {
  it("render", () => {
    render(<Found />);

    const component = screen.getByTestId("found");

    expect(component).toBeInTheDocument();
  });
});
