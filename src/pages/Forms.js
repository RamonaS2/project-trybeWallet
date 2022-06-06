import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fethApi } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fethApi());
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="number"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
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
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Form);
