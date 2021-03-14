export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_COMPLETE = 'UPDATE_COMPLETE';
//============================================================
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
//============================================================
export const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};
//============================================================
export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
//============================================================
export const updateComplete = (todo) => {
  return {
    type: UPDATE_COMPLETE,
    payload: todo,
  };
};
//============================================================
