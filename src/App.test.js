import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Title from "./components/Title";

describe("Smoke test", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
