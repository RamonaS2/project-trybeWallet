// Coloque aqui suas actions
export const SET_USER_EMAIL = 'SET_USER_EMAI';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const NOVO_OBJ = 'NOVO_OBJ';
export const EXCLUI = 'EXCLUI';

export const setUserEmail = (payload) => ({
  type: SET_USER_EMAIL,
  payload,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const novoObj = (obj) => ({
  type: NOVO_OBJ,
  obj,
});

export function fethApi(boleano = false, despesa) {
  return async (dispatch) => {
    try {
      const url = await fetch('https://economia.awesomeapi.com.br/json/all');
      const response = await url.json();

      if (boleano) {
        const expense = {
          ...despesa,
          exchangeRates: response,
        };
        dispatch(novoObj(expense));
        return;
      }
      const currencies = Object.keys(response).filter((moeda) => moeda !== 'USDT');
      dispatch(getCurrencies(currencies));
    } catch (error) {
      console.log(error);
    }
  };
}

export const exclui = (des) => ({
  type: EXCLUI,
  des,
});
