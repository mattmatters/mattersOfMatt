import { combineReducers } from 'redux';
import listReducer from '../reducers/listReducer';

const reducers = combineReducers({
  listReducer,
});

export default reducers;
