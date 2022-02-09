import React, { Fragment, useState } from 'react';
import TodoList from './components/todolist/TodoList';
import NewTodo from './components/newtodo/NewTodo';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodoHandler = newTodoList => {
    setTodoList(prevTodoList => prevTodoList.concat(newTodoList));
  };

  return (
    <Fragment>
      <h1 style={{ textAlign: 'center' }}>ToDo App</h1>
      <NewTodo onAddTodo={addNewTodoHandler} />
      <TodoList todos={todoList} />
    </Fragment>
  );
};

export default App;
