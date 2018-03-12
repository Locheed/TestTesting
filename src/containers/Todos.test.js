import React from "react";
import { shallow } from "enzyme";
import Todos from "./Todos";
import Todo from "../components/Todo/Todo";

describe("Todos container component", () => {
  let todoitems = [
    "Buy milk",
    "Call doctor",
    "Shave your head",
    "Pet your dog"
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Todos />);
  });

  it("renders Todoslist", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders todoitems if stored", () => {
    expect(wrapper.find(Todo)).toHaveLength(todoitems.length);
  });
});
