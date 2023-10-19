import React from 'react';

const TodoItem = ({ text, onDelete })=> {
  return (
    <li>
      {text}
      <button onClick={onDelete} style={{background: "red ",color: "white"}}>Delete</button>
    </li>
  );
}

export default TodoItem;
