import React from "react";
import { shallow } from "enzyme";
import TodoCounter from "./TodoCounter";

describe("Todo counter component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoCounter />);
  });

  it("renders count of todos", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });
});
