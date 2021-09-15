import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sortReducer from '../features/sorting/sortingSlice';
import filterReducer from '../features/filter/filterSlice';
import ticketSlice from '../features/tickets/ticketSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sort: sortReducer,
    filter: filterReducer,
    tickets: ticketSlice,
  },
});
