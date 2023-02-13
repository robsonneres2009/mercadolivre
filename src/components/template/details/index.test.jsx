import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import mockRouter from "next-router-mock";
import Details from ".";

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

mockRouter.push("id");

describe("Details", () => {
  it("render", () => {
    render(<Details />);

    const component = screen.getByTestId("details");

    expect(component).toBeInTheDocument();
  });
});
