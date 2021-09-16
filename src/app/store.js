import { configureStore } from '@reduxjs/toolkit';
import sortReducer from '../features/sorting/sortingSlice';
import filterReducer from '../features/filter/filterSlice';
import ticketSlice from '../features/tickets/ticketSlice';

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer,
    tickets: ticketSlice,
  },
});
