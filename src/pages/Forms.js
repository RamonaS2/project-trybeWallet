import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fethApi } from '../actions';

const ali = 'Alimentação';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ali,
    };
  }

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(fethApi());
  // }

  inputValue = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  saveButton = async () => {
    const { value, description, currency, method, tag } = this.state;
    const { expenses } = this.props;
    const id = expenses.length;
    const obj = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };

    const { dispatch } = this.props;
    dispatch(fethApi(true, obj));

    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ali,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            name="value"
            value={ value }
            type="number"
            data-testid="value-input"
            onChange={ this.inputValue }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.inputValue }
          />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            onChange={ this.inputValue }
            name="currency"
            value={ currency }
          >
            {currencies.map((moeda) => (
              <option key={ moeda }>{ moeda }</option>
            ))}
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento:
          <select
            id="pagamento"
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.inputValue }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.inputValue }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ this.saveButton }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Form);
