import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateComplete, updateTodo } from '../redux/actions';
import useSound from 'use-sound';
import { IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  todoItem: {
    // border: '2px solid red',
    width: '100%',
    display: 'flex',
    '@media (max-width: 600px)': {
      display: 'block',
    },

    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem 0',
  },

  iconBtn: {
    backgroundColor: '#355C7D', //blue
    color: '#fff',
    width: '1.7rem',

    '&:hover': {
      backgroundColor: '#518248', //green
      '@media (max-width: 600px)': {
        backgroundColor: '#355C7D',
      },
    },
  },
  iconBtngreen: {
    backgroundColor: '#518248', //green

    color: '#fff',
    width: '1.7rem',
    '&:hover': {
      // backgroundColor: '#355C7D', //blue
      backgroundColor: '#518248', //green
    },
  },

  textField: {
    '& label.Mui-focused': {
      color: '#6b5b7a',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#355C7D',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#355C7D',
    },
  },
});
//=======================================================================
const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  const [editError, setEditError] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  let todos = useSelector((state) => state);
  const classes = useStyles();
  let dispatch = useDispatch();
  const matches = useMediaQuery('(max-width:600px)');
  //=======================================================================
  const editSound = './Edit.mp3';
  const deleteSound = './Delete.mp3';
  const errorSound = './Error.mp3';
  const successSound = './Success.mp3';
  const UndoSound = './Undo.mp3';
  const [playEdit] = useSound(editSound, { volume: 0.5 });
  const [playDelete] = useSound(deleteSound, { volume: 0.5 });
  const [playError] = useSound(errorSound, { volume: 0.5 });
  const [playSuccess] = useSound(successSound, { volume: 0.5 });
  const [playUndo] = useSound(UndoSound, { volume: 0.5 });
  //=======================================================================
  const checkEdit = (name) => {
    if (edit && name.length !== todo.name.length) {
      return dispatch(
        updateTodo({
          ...todo,
          name: name,
        })
      );
    }
    setEdit(!edit);
  };
  //=======================================================================
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      playError();
      setEditError(true);
      return;
    }
    checkEdit(name);
    setEdit(!edit);
    playEdit();
  };
  //=======================================================================
  const handleClick = () => {
    setCompleted(!completed);
    !completed ? playSuccess() : playUndo();
    dispatch(
      updateComplete({
        // id: checkLastIndex(todos.slice(-1)[0].id),
        ...todo,
        completed: !completed,
      })
    );
  };
  //=======================================================================
  const todoIndex = todos.indexOf(todo);
  //=======================================================================

  return (
    <div>
      <form
        noValidate
        autoComplete='on'
        className={classes.todoItem}
        onSubmit={handleEditSubmit}
      >
        <Grid container alignItems='center'>
          <Grid item>
            <Tooltip
              title={!completed ? 'Mark as complete' : 'Cancel complete'}
              placement='top'
              arrow
            >
              <IconButton
                className={completed ? classes.iconBtngreen : classes.iconBtn}
                size='small'
                onClick={handleClick}
              >
                {todoIndex + 1}
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid
            item
            style={{ width: `${matches ? '80%' : '90%'}`, margin: '0 auto' }}
          >
            {edit ? (
              <TextField
                multiline
                rowsMax='10'
                className={classes.textField}
                variant='standard'
                error={editError}
                id='todoInput'
                label={editError && ' Please add a to do'}
                value={name}
                style={{ width: '100%' }}
                onChange={(e) => {
                  setName(e.target.value);
                  setEditError(false);
                }}
              />
            ) : (
              <div className={completed ? 'line-through' : 'displayTodo '}>
                {todo.name}
                {completed && (
                  <CheckCircleIcon
                    style={{
                      verticalAlign: 'middle',
                      paddingBottom: '0.2rem',
                    }}
                  />
                )}
              </div>
            )}
          </Grid>
        </Grid>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0.2rem 0',
          }}
        >
          <Button
            type='submit'
            variant='contained'
            color='primary'
            style={{
              color: '#fff',
              width: '4rem',
              margin: '0 0.25rem',
              backgroundColor: '#355C7D',
            }}
          >
            {edit ? 'UPDATE' : 'EDIT'}
          </Button>
          <Button
            variant='contained'
            color='secondary'
            style={{
              width: '4rem',
              margin: '0 0.25rem',
              backgroundColor: '#C06C84',
            }}
            onClick={() => {
              dispatch(deleteTodo(todo));
              playDelete();
            }}
          >
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TodoItem;
