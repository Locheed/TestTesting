import React, { Component, Fragment } from "react";
import Todo from "../components/Todo/Todo";
import TodoCounter from "../components/TodoCounter/TodoCounter";
import AddTodo from "../components/AddTodo/AddTodo";

export default class Todos extends Component {
  state = {
    items: ["Buy milk", "Call doctor", "Shave your head", "Pet your dog"]
  };
  render() {
    const todoNodes = this.state.items.map(item => (
      <Todo text={item} key={item} />
    ));
    return (
      <Fragment>
        <TodoCounter countItems={this.state.items.length} />
        <div> {todoNodes} </div>
        <AddTodo />
      </Fragment>
    );
  }
}
