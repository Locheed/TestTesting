import React from "react";
import { shallow } from "enzyme";
import AddTodo from "./AddTodo";

describe("AddTodo component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddTodo />);
  });

  it("renders inputbox", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("renders add button", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
});
