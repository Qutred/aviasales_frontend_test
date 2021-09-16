import React from 'react';
import classNames from 'classnames';
import './../../assets/scss/components/_checkbox.scss';
import './filter.scss';
import { useDispatch } from 'react-redux';
import { toggleFilterType } from './filterSlice';

const Filter = React.memo(({ filterTypes }) => {
  const dispatch = useDispatch();

  const toggleFilterHandle = (id) => {
    dispatch(toggleFilterType(id));
  };

  return (
    <div className={classNames(`filter`)}>
      <p className={classNames(`filterContainer__title`)}>
        Количество пересадок
      </p>
      <ul className={`filter__list`}>
        {filterTypes.map((filterType) => {
          return (
            <li key={filterType.id} className={`filter__listItem`}>
              <label className={`checkboxWrapper`}>
                <input
                  type='checkbox'
                  checked={filterType.checked}
                  onChange={() => toggleFilterHandle(filterType.id)}
                />
                <span className={`checkmark`}></span>
                {filterType.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Filter;
