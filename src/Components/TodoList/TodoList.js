import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const deleteTodo = id => {
    const deletedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(deletedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
    <header>
    <h1>What's the Plan for Today?</h1>
    </header>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;