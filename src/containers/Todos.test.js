import React from "react";
import { shallow } from "enzyme";
import Todos from "./Todos";
import Todo from "../components/Todo/Todo";
import AddTodo from "../components/AddTodo/AddTodo";

describe("Todos container component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Todos />);
  });

  it("renders Todoslist", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders same amount of todos in state", () => {
    expect(wrapper.state().items).toHaveLength(4);
  });

  it("renders AddTodo component", () => {
    expect(wrapper.find(AddTodo)).toHaveLength(1);
  });
});
