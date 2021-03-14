import { ADD_TODO, DELETE_TODO, UPDATE_TODO, UPDATE_COMPLETE } from './actions';
import { todos } from './exampleTodos';

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];

      newTodos.push(action.payload);
      return newTodos;
      break;
    case DELETE_TODO:
      newTodos = [...state];
      const updatedDelete = newTodos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
      // .map((todo, index) => {
      //   console.log('todo - delete ', todo);
      //   return { ...todo, id: index + 1 };
      // });
      return updatedDelete;

    case UPDATE_TODO:
      newTodos = [...state];
      const updatedTodos = newTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        } else {
          return todo;
        }
      });
      return updatedTodos;
      break;
    case UPDATE_COMPLETE:
      newTodos = [...state];
      const updateCompleted = newTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: action.payload.completed };
        } else {
          return todo;
        }
      });
      return updateCompleted;

      break;
    default:
  }
  return state;
};
