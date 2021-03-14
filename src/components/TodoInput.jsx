import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';
import useSound from 'use-sound';

const useStyles = makeStyles({
  root: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.2rem 0.2rem',
  },
  textField: {
    '& label.Mui-focused': {
      color: '#6b5b7a',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#6b5b7a',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#6b5b7as',
    },
  },
});
//=================================================================
const TodoInput = ({ todos }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [inputError, setInputError] = useState(false);
  let dispatch = useDispatch();

  //=================================================================
  const addSound = './Add.mp3';
  const errorSound = './Error.mp3';
  const [playAdd] = useSound(addSound, { volume: 0.5 });
  const [playError] = useSound(errorSound, { volume: 0.5 });
  //=================================================================
  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setInputError(true);

      playError();
    } else {
      dispatch(
        addTodo({
          id: checkLastIndex(todos),
          name: name,
          completed: false,
        })
      );
      playAdd();
      setName('');
      setInputError(false);
    }
  };
  //=================================================================
  const checkLastIndex = (todos) => {
    let id;
    if (todos.length < 1 || todos == undefined) {
      return (id = 1);
    } else {
      return (id = todos.slice(-1)[0].id + 1);
    }
  };

  //=================================================================
  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete='on'
        onSubmit={handleInputSubmit}
      >
        <TextField
          className={classes.textField}
          error={inputError}
          variant='standard'
          id='standard-basic'
          label={
            inputError ? 'Empty field - Please add a to do' : 'Add a to do'
          }
          style={{ width: '70%', margin: '0 auto' }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setInputError(false);
          }}
        />
        <Button
          variant='contained'
          color='primary'
          style={{
            width: '22.6%',
            backgroundColor: '#88607d',
          }}
          type='submit'
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default TodoInput;
