import { createStore } from 'redux';
import { reducer } from './reducer';
import { loadState, saveState } from '../redux/localstorage';

const persistedState = loadState();

export let store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});
