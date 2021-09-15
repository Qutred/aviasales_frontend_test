import { format, add } from 'date-fns';

export const formatTransfer = (stops) => {
  switch (stops) {
    case 0:
      return 'Прямой';
    case 1:
      return '1 пересадка';
    case 2:
      return '2 пересадки';
    case 3:
      return '3 пересадки';
    default:
      return `${stops} пересадок`;
  }
};

export const getBoardingTime = (seconds) => {
  const hours = (seconds / 3600) ^ 0;
  const minutes = ((seconds - hours * 3600) / 60) ^ 0;

  const str = `${
    hours === 0 ? '' : hours < 10 ? '0' + hours + 'ч' : hours + 'ч'
  } ${
    minutes === 0 ? '' : minutes < 10 ? '0' + minutes + ' м' : minutes + ' м'
  }`;

  return str;
};

export const getTimeOnFly = (date, second) => {
  var result = add(new Date(date), {
    seconds: second,
  });

  return `${format(new Date(date), 'HH:mm')} : ${format(
    new Date(result),
    'HH:mm'
  )}`;
};
