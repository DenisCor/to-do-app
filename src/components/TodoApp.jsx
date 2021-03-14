import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    boxShadow: '0px 0px 35px 4px black',
    padding: '1rem',
    fontWeight: '600',
    borderRadius: '15px',
    backgroundColor: '#f5f5f5',
    marginBottom: '3rem',
  },
});
//=================================================================
const TodoApp = () => {
  let todos = useSelector((state) => state);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TodoInput todos={todos} />
      <TodoList />
    </div>
  );
};

export default TodoApp;
