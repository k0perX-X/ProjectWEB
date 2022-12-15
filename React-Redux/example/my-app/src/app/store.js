import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clockReducer from '../features/clock/clockSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
  },
});
