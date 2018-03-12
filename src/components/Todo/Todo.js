import React from "react";

const Todo = props => {
  return (
    <div>
      <p>{props.text}</p>
      <button>X</button>
    </div>
  );
};

export default Todo;
