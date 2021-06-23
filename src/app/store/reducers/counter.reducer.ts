import { createReducer, on } from '@ngrx/store';
import { reset } from '../actions/counter.action';
import { multiply } from '../actions/counter.action';
import { decrement } from '../actions/counter.action';
import { increment } from '../actions/counter.action';

export const initialState = { counter: 0 };

const _counterReducer = createReducer(
  initialState,
  on(increment, state => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, state => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(multiply, (state, { multiplyBy }) => {
    return { ...state, counter: state.counter * multiplyBy };
  }),
  on(reset, state => initialState)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
