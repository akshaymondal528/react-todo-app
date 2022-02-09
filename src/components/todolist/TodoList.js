import React from 'react';

import './Todolist.css';

const TodoList = props => {
  let count = 1;
  return (
    <div className="todolist">
      <ul>
        {props.todos.map(todo => {
          return (
            <li key={todo.id}>
              {count++}. &nbsp;
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
