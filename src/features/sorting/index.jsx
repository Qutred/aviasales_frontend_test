import { logRoles } from '@testing-library/dom';
import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sorting.scss';
import { sortTypes, selectSortType, setSortType } from './sortingSlice.js';

const Sorting = () => {
  const sortBy = useSelector(selectSortType);
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
              console.log('event', e);
              changeSortType(sType.sortBy);
            }}
          >
            <span>{sType.name}</span>
          </li>
        );
      })}
      {/* <li className={`sorting__item sorting__item_active`}>
        <span>Самый дешевый</span>
      </li>
      <li className={`sorting__item`}>
        <span>Самый быстрый</span>
      </li>
      <li className={`sorting__item`}>
        <span>Оптимальный</span>
      </li> */}
    </ul>
  );
};

export default Sorting;
