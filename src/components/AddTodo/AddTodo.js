import React from "react";

const AddTodo = props => {
  let textInput = "hello";
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.handleSubmit(textInput.value);
        }}
      >
        <input
          id="input-box"
          type="text"
          ref={input => {
            textInput = input;
          }}
        />
        <input id="submit-button" type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default AddTodo;
