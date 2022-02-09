import React, { useState } from 'react';
import './NewTodo.css';

const NewTodo = props => {
  const [enteredTexed, setEnteredText] = useState('');

  const addTodoHandler = e => {
    e.preventDefault();

    const newTodo = {
      id: Math.random().toString(),
      text: enteredTexed,
    };
    setEnteredText('');

    props.onAddTodo(newTodo);
  };

  const textchangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="todo-input" onSubmit={addTodoHandler}>
      <input type="text" value={enteredTexed} onChange={textchangeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTodo;
