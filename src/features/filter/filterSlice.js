import { createSlice } from '@reduxjs/toolkit';

/* ------------------------------ Filters ----------------------------- */

export const filterTypes = [
  {
    id: -1,
    name: 'Все',
    checked: true,
  },
  {
    id: 0,
    name: 'Без пересадок',
    checked: true,
  },
  {
    id: 1,
    name: '1 пересадка',
    checked: true,
  },
  {
    id: 2,
    name: '2 пересадки',
    checked: true,
  },
  {
    id: 3,
    name: '3 пересадки',
    checked: true,
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
      const activeFilter = action.payload;
      if (activeFilter === -1 && state.filterTypes[0].checked) {
        state.filterTypes.map((type) => {
          type.checked = false;
          return type;
        });
      } else if (activeFilter === -1 && !state.filterTypes[0].checked) {
        state.filterTypes.map((type) => {
          type.checked = true;
          return type;
        });
      } else {
        state.filterTypes.map((type, index, array) => {
          if (index === 0) {
            type.checked = false;
          }
          if (type.id === action.payload) {
            type.checked = !type.checked;
          }
          return type;
        });
      }
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
