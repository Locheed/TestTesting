import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Smoke test", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
