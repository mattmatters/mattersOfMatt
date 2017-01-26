import fetch from 'isomorphic-fetch';

// Action types
export const REQUEST_DATA = 'REQUEST_DATA';
export const INVALIDATE_DATA = 'INVALIDATE_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const SELECT_LIST = 'SELECT_LIST';

// Action creators
export const selectList = list => ({
  type: SELECT_LIST,
  list,
});

export const requestData = list => ({
  type: REQUEST_DATA,
  list,
});

export const invalidateData = list => ({
  type: INVALIDATE_DATA,
  list,
});

export const receiveData = (list, json) => ({
  type: RECEIVE_DATA,
  list,
  data: json.map(child => child),
  receivedAt: Date.now(),
});

export const fetchData = list => (
  (dispatch) => {
    dispatch(requestData(list));
    return fetch(`https://fcctop100.herokuapp.com/api/fccusers/top/${list}`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(list, json)));
  }
);
