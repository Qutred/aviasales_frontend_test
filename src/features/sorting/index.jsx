import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import './sorting.scss';
import { sortTypes, setSortType } from './sortingSlice.js';

const Sorting = React.memo(({ sortBy }) => {
  const dispatch = useDispatch();

  const changeSortType = (type) => {
    dispatch(setSortType(type));
  };
  return (
    <ul className={`sorting`}>
      {sortTypes.map((sType) => {
        return (
          <li
            key={sType.id}
            className={classNames(`sorting__item`, {
              sorting__item_active: sortBy === sType.sortBy,
            })}
            onClick={(e) => {
              changeSortType(sType.sortBy);
            }}
          >
            <span>{sType.name}</span>
          </li>
        );
      })}
    </ul>
  );
});

export default Sorting;
