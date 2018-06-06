import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';

const INITIAL_STATE = 0;

const reducers = {
  [INCREMENT_COUNTER]: (state, action) => state + action.payload.count,
  [DECREMENT_COUNTER]: (state, action) => state - action.payload.count,
};

export default (state = INITIAL_STATE, action) => reducers[action.type] ? reducers[action.type](state, action) : state;
