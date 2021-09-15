import { createSlice } from '@reduxjs/toolkit';

/* ------------------------------ Initial State ----------------------------- */

const initialState = {
  tickets: [],
};

/* ---------------------------------- Slice --------------------------------- */

export const ticketSlice = createSlice({
  name: 'ticket',
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
  },
});

/* -------------------------------- Selectors ------------------------------- */

export const selectFilterTypes = (state) => {
  console.log(state);
  return state.filter.filterTypes;
};

export const { toggleFilterType } = ticketSlice.actions;
export default ticketSlice.reducer;
