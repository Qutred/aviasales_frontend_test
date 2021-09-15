import React from 'react';
import './ticket.scss';

const TicketItem = () => {
  return (
    <div className={`ticketItem`}>
      <div className={`ticketItem__top`}>
        <p className={`ticketItem__price`}>13 400 Р </p>
        <img
          src={`https://pics.avs.io/99/36/ET.png`}
          className={`ticketItem__logo`}
        ></img>
      </div>
      <div className={`ticketItem__smallDesk`}>
        <div className={`ticketItem__column`}>
          <p className={`ticketItem__smallTitle`}>MOW – HKT</p>
          <p className={`ticketItem__detail`}>10:45 – 08:00</p>
        </div>
        <div className={`ticketItem__column`}>
          <p className={`ticketItem__smallTitle`}>В пути</p>
          <p className={`ticketItem__detail`}>21ч 15м</p>
        </div>
        <div className={`ticketItem__column`}>
          <p className={`ticketItem__smallTitle`}>2 пересадки</p>
          <p className={`ticketItem__detail`}>HKG, JNB</p>
        </div>
      </div>
      <div className={`ticketItem__smallDesk`}>
        <div className={`ticketItem__column`}>
          <p className={`ticketItem__smallTitle`}>MOW – HKT</p>
          <p className={`ticketItem__detail`}>10:45 – 08:00</p>
        </div>
        <div className={`ticketItem__column`}>
          <p className={`ticketItem__smallTitle`}>В пути</p>
          <p className={`ticketItem__detail`}>21ч 15м</p>
        </div>
        <div className={`ticketItem__column`}>
          <p className={`ticketItem__smallTitle`}>2 пересадки</p>
          <p className={`ticketItem__detail`}>HKG, JNB</p>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
