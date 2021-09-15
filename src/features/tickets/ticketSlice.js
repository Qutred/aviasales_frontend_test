import { createSlice } from '@reduxjs/toolkit';
import TicketAPI from './api';

/* ------------------------------ Initial State ----------------------------- */

const initialState = {
  tickets: [],
  searchId: null,
  isLoading: false,
  isError: false,
};

/* ---------------------------------- Slice --------------------------------- */

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    toggleFilterType: (state, action) => {
      state.filterTypes.map((type) => {
        if (type.id === action.payload) {
          type.checked = !type.checked;
        }
        return type;
      });
    },
    setSearchId: (state, action) => {
      state.searchId = action.payload.searchId;
    },
    setTickets: (state, action) => {
      state.tickets.push(...action.payload);
    },
    setLoadingTo: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrorTo: (state, action) => {
      state.isError = action.payload;
    },
  },
});

/* -------------------------------- Selectors ------------------------------- */

export const selectTickets = (state) => {
  return state.tickets.tickets;
};
export const selectTicketsState = (state) => {
  return state.tickets;
};

/* ---------------------------------- Async --------------------------------- */

export const getTickets = () => async (dispatch) => {
  try {
    dispatch(setLoadingTo(true));
    const response = await TicketAPI.getSearchId();
    dispatch(setSearchId(response.data));
    const tickets = await TicketAPI.getTickets(response.data.searchId);
    dispatch(setTickets(tickets.data.tickets.slice(0, 5)));
    dispatch(setLoadingTo(false));
  } catch (error) {
    dispatch(setErrorTo(true));
  }
};

export const {
  toggleFilterType,
  setSearchId,
  setTickets,
  setLoadingTo,
  setErrorTo,
} = ticketSlice.actions;
export default ticketSlice.reducer;
