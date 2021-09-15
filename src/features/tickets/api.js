import axios from 'axios';
const baseURL = 'https://front-test.beta.aviasales.ru/';

class TicketAPI {
  static getSearchId = async () => {
    try {
      let searchIdObj = await axios.get(baseURL + 'search');
      return searchIdObj;
    } catch (error) {
      throw Error(error);
    }
  };

  static getTickets = async (searchId) => {
    try {
      let tickets = await axios.get(baseURL + 'tickets', {
        params: {
          searchId,
        },
      });
      return tickets;
    } catch (error) {
      throw Error(error);
    }
  };
}

export default TicketAPI;
