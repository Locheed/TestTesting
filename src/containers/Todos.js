import React, { Component, Fragment } from "react";
import Todo from "../components/Todo/Todo";
import TodoCounter from "../components/TodoCounter/TodoCounter";

class Todos extends Component {
  render() {
    let todoitems = [
      "Buy milk",
      "Call doctor",
      "Shave your head",
      "Pet your dog"
    ];

    const todoNodes = todoitems.map(x => <Todo text={x} key={x} />);
    return (
      <Fragment>
        <TodoCounter countItems={todoitems.length} />
        <div>{todoNodes}</div>
      </Fragment>
    );
  }
}

export default Todos;
