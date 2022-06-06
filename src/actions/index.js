// Coloque aqui suas actions
export const SET_USER_EMAIL = 'SET_USER_EMAI';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const setUserEmail = (payload) => ({
  type: SET_USER_EMAIL,
  payload,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export function fethApi() {
  return async (dispatch) => {
    try {
      const url = await fetch('https://economia.awesomeapi.com.br/json/all');
      const response = await url.json();
      const currencies = Object.keys(response).filter((moeda) => moeda !== 'USDT');
      dispatch(getCurrencies(currencies));
    } catch (error) {
      console.log(error);
    }
  };
}
