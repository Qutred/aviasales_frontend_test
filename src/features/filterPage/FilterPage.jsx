import classNames from 'classnames';
import React, { Fragment, useEffect } from 'react';
import './filter.scss';
import logo from '../../assets/img/logo.svg';
import Sorting from '../sorting';
import TicketItem from '../tickets';
import Filter from '../filter';
import Loader from '../loader';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSearchId,
  getTickets,
  selectTickets,
  selectTicketsState,
} from '../tickets/ticketSlice';
import { sortTickets } from '../tickets/helpers';
import { selectSortType } from '../sorting/sortingSlice';

const FilterPage = () => {
  const { tickets, isLoading, isError } = useSelector(selectTicketsState);
  const sortBy = useSelector(selectSortType);
  const dispatch = useDispatch();
  const sortedTickets = sortTickets([...tickets], sortBy);

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <Fragment>
      <div className={`header`}>
        <img src={logo} />
      </div>
      <div className={`filterContainer`}>
        <Filter />
        <div className={`filterContainer__content content`}>
          <Sorting />
          {isError && (
            <div className={`filterContainer__error`}>
              Что то пошло не так пожалуйста перезагрузите страницу
            </div>
          )}
          {isLoading && <Loader />}
          {tickets.length > 0
            ? sortedTickets.map((ticket, index) => {
                return <TicketItem key={index} ticketData={ticket} />;
              })
            : null}
        </div>
      </div>
    </Fragment>
  );
};

export default FilterPage;
