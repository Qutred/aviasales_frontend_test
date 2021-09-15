import { createSlice } from '@reduxjs/toolkit';

/* ------------------------------ Filters ----------------------------- */

export const filterTypes = [
  {
    id: 1,
    name: 'Все',
    checked: false,
  },
  {
    id: 2,
    name: 'Без пересадок',
    checked: false,
  },
  {
    id: 3,
    name: '1 пересадка',
    checked: false,
  },
  {
    id: 4,
    name: '2 пересадки',
    checked: false,
  },
  {
    id: 5,
    name: '3 пересадки',
    checked: false,
  },
];

/* ------------------------------ Initial State ----------------------------- */

const initialState = {
  filterTypes,
};

/* ---------------------------------- Slice --------------------------------- */

export const filterSlice = createSlice({
  name: 'filter',
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

export const { toggleFilterType } = filterSlice.actions;
export default filterSlice.reducer;
