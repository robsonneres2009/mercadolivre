import { render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Context from "./context";
import React from "react";

jest.mock("next/router", () => require("next-router-mock"));
const ContextAPI = jest.fn();
const useStateSpy = jest.spyOn(React, "useContext");
useStateSpy.mockImplementation((initialState) => [
  initialState,
  useContext,
  setQuery,
]);

describe("Context", () => {
  it("render", () => {
    const { result } = renderHook(() => ContextAPI());

    expect(ContextAPI.mock.calls.length).toBe(1);
  });
});
