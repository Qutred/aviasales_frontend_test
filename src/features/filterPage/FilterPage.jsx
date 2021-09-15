import classNames from 'classnames';
import React, { Fragment } from 'react';
import './filter.scss';
import logo from '../../assets/img/logo.svg';
import Sorting from '../sorting';
import TicketItem from '../ticket';
import Filter from '../filter';
import Loader from '../loader';

const FilterPage = () => {
  return (
    <Fragment>
      <div className={`filterContainer__logo`}>
        <img src={logo} />
      </div>
      <div className={`filterContainer`}>
        <Filter />
        <div className={`filterContainer__content content`}>
          <Sorting />
          <TicketItem />
          <TicketItem />
          <Loader />
        </div>
      </div>
    </Fragment>
  );
};

export default FilterPage;
