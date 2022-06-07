// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, NOVO_OBJ, EXCLUI } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case NOVO_OBJ:
    return { ...state, expenses: [...state.expenses, action.obj] };
  case EXCLUI:
    return {
      ...state, expenses: [...state.expenses.filter((des) => des.id !== action.des)] };
  default:
    return state;
  }
};

export default wallet;
