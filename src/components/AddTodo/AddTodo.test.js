import React from "react";
import { shallow } from "enzyme";
import AddTodo from "./AddTodo";

describe("AddTodo component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddTodo />);
  });

  it("renders inputbox", () => {
    expect(wrapper.find("#input-box")).toHaveLength(1);
  });

  it("renders add button", () => {
    expect(wrapper.find("#submit-button")).toHaveLength(1);
  });
});
