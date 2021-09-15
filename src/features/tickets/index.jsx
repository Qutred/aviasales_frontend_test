import React from 'react';
import { formatTransfer, getBoardingTime, getTimeOnFly } from '../../utils';
import './ticket.scss';

const TicketItem = (props) => {
  const { price, carrier, segments } = props.ticketData;
  return (
    <div className={`ticketItem`}>
      <div className={`ticketItem__top`}>
        <p className={`ticketItem__price`}>{price} Р </p>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          className={`ticketItem__logo`}
          alt='logo'
        ></img>
      </div>
      {segments.map((segment, index) => {
        return (
          <div key={index} className={`ticketItem__smallDesk`}>
            <div className={`ticketItem__column`}>
              <p
                className={`ticketItem__smallTitle`}
              >{`${segment.origin} - ${segment.destination}`}</p>
              <p className={`ticketItem__detail`}>
                {getTimeOnFly(segment.date, segment.duration)}
              </p>
            </div>
            <div className={`ticketItem__column`}>
              <p className={`ticketItem__smallTitle`}>В пути</p>
              <p className={`ticketItem__detail`}>
                {getBoardingTime(segment.duration)}
              </p>
            </div>
            <div className={`ticketItem__column`}>
              <p className={`ticketItem__smallTitle`}>
                {formatTransfer(segment.stops.length)}
              </p>
              <p className={`ticketItem__detail`}>
                {segment.stops.length ? segment.stops.join(',') : '-'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketItem;
