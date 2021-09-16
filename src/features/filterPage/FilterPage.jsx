import React, { Fragment, useEffect } from 'react';
import './filter.scss';
import logo from '../../assets/img/logo.svg';
import Sorting from '../sorting';
import TicketItem from '../tickets';
import Filter from '../filter';
import Loader from '../loader';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, selectTicketsState } from '../tickets/ticketSlice';
import { filterTickets, sortTickets } from '../tickets/helpers';
import { selectSortType } from '../sorting/sortingSlice';
import { selectFilterTypes } from '../filter/filterSlice';

const FilterPage = () => {
  const { tickets, isLoading, isError } = useSelector(selectTicketsState);
  const filterTypes = useSelector(selectFilterTypes);
  const sortBy = useSelector(selectSortType);
  const dispatch = useDispatch();
  const sortedTickets = sortTickets([...tickets], sortBy);
  const filteredTickets = filterTickets(sortedTickets, filterTypes);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  return (
    <Fragment>
      <div className={`header`}>
        <img src={logo} alt='logo' />
      </div>
      <div className={`filterContainer`}>
        <Filter filterTypes={filterTypes} />
        <div className={`filterContainer__content content`}>
          <Sorting sortBy={sortBy} />
          {isError && (
            <div className={`filterContainer__error`}>
              Что то пошло не так пожалуйста перезагрузите страницу
            </div>
          )}
          {!isLoading && !isError && !filteredTickets.length && (
            <div className={`filterContainer__error`}>
              Ничего подходящего под ваш фильтр не найдено
            </div>
          )}
          {isLoading && !isError && <Loader />}
          {tickets.length > 0
            ? filteredTickets.map((ticket, index) => {
                return <TicketItem key={index} ticketData={ticket} />;
              })
            : null}
        </div>
      </div>
    </Fragment>
  );
};

export default FilterPage;
