import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

function TodoList() {
  let todos = useSelector((state) => state);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
