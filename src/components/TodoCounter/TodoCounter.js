import React from "react";
import { number } from "prop-types";

const TodoCounter = props => {
  return (
    <div>
      <p>Items: {props.countItems}</p>
    </div>
  );
};

TodoCounter.propTypes = {
  countItems: number.isRequired
};

TodoCounter.defaultProps = {
  countItems: 0
};

export default TodoCounter;
