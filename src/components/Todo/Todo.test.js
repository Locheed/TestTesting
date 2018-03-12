import React from "react";
import { shallow } from "enzyme";
import Todo from "./Todo";

describe("Todoitem  component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Todo text="buy milk" />);
  });

  it("receives props of text", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });
});
