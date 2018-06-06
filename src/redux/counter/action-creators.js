import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';

export const increment = (count = 1) => ({
  type: INCREMENT_COUNTER,
  payload: { count },
});

export const decrement = (count = 1) => ({
  type: DECREMENT_COUNTER,
  payload: { count },
});

export const incrementAsync = (count = 1) => dispatch => {
  setTimeout(() => dispatch(increment(count)), 1000); 
};

export const decrementAsync = (count = 1) => dispatch => {
  setTimeout(() => dispatch(decrement(count)), 1000);
};
