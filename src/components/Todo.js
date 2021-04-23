import React from 'react';

const Todo = (props) => {
  return (
    <div onClick={props.clicked}>
      <h1>{props.title}</h1>
      <p>description: {props.description}</p>
    </div>
  );
};

export default Todo;
