import { createSlice } from '@reduxjs/toolkit';

/* ------------------------------ Default Types ----------------------------- */

export const sortTypes = [
  {
    id: 1,
    name: 'Самый дешевый',
    sortBy: 'cheap',
  },
  {
    id: 2,
    name: 'Самый быстрый',
    sortBy: 'fast',
  },
  {
    id: 3,
    name: 'Оптимальный',
    sortBy: 'optimal',
  },
];

/* ------------------------------ Initial State ----------------------------- */

const initialState = {
  sortBy: 'cheap',
};

/* ---------------------------------- Slice --------------------------------- */

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortType: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

/* -------------------------------- Selectors ------------------------------- */

export const selectSortType = (state) => state.sort.sortBy;

export const { setSortType } = sortSlice.actions;
export default sortSlice.reducer;
