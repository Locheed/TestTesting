import React, { Component, Fragment } from "react";
import Todo from "../components/Todo/Todo";
import TodoCounter from "../components/TodoCounter/TodoCounter";
import AddTodo from "../components/AddTodo/AddTodo";

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      items: ["Buy milk", "Call doctor", "Shave your head", "Pet your dog"]
    };
  }

  handleAddItem = event => {
    console.log(event);
    this.setState({ items: [...this.state.items, event] });
  };

  render() {
    const todoNodes = this.state.items.map((item, i) => (
      <Todo text={item} key={item + i} />
    ));
    return (
      <Fragment>
        <TodoCounter countItems={this.state.items.length} />
        <div> {todoNodes} </div>
        <AddTodo handleSubmit={this.handleAddItem} />
      </Fragment>
    );
  }
}
