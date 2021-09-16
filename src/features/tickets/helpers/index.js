const sortByCheap = (ticket1, ticket2) => {
  if (ticket1.price > ticket2.price) {
    return 1;
  } else if (ticket1.price < ticket2.price) {
    return -1;
  } else {
    return 0;
  }
};
const sortByFast = (ticket1, ticket2) => {
  let timeA = 0;
  let timeB = 0;

  ticket1.segments.forEach((e) => {
    timeA = timeA + e.duration;
  });

  ticket2.segments.forEach((e) => {
    timeB = timeB + e.duration;
  });

  if (timeA > timeB) {
    return 1;
  }
  return -1;
};

export const sortTickets = (tickets, sortType) => {
  if (tickets.length) {
    if (sortType === 'cheap') {
      return tickets.sort(sortByCheap);
    } else if (sortType === 'fast') {
      return tickets.sort(sortByFast);
    }
  } else {
    return tickets;
  }
};

export const filterTickets = (tickets, filterTypes) => {
  let checkedFilters = filterTypes
    .filter((type) => type.checked)
    .map((type) => type.id);

  let isActiveAll = checkedFilters.includes(-1);
  if (isActiveAll) {
    return tickets;
  } else {
    return tickets.filter((ticket) => {
      const filterAceptable = ticket.segments.filter((segment) => {
        return checkedFilters.includes(segment.stops.length);
      });

      if (filterAceptable.length) {
        return true;
      } else {
        return false;
      }
    });
  }
};
