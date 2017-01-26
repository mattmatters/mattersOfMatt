import { combineReducers } from 'redux';
import {
  SELECT_LIST, REQUEST_DATA, INVALIDATE_DATA, RECEIVE_DATA,
} from '../actions';

const selectedList = (state = 'alltime', action) => {
  switch (action.type) {
    case SELECT_LIST:
      return action.list;
    default:
      return state;
  }
};

const dataInitialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const data = (state = dataInitialState, action) => {
  switch (action.type) {
    case INVALIDATE_DATA:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.data,
        lastUpdate: action.receivedAt,
      });
    default:
      return state;
  }
};

const dataByList = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_DATA:
    case REQUEST_DATA:
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        [action.list]: data(state[action.list], action),
      });
    default:
      return state;
  }
};

const listReducer = combineReducers({
  selectedList,
  dataByList,
});

export default listReducer;
