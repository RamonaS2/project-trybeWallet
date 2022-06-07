import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { exclui } from '../actions/index';

class Tabela extends React.Component {
    paraExcluir = (expense) => {
      const { remove } = this.props;
      remove(expense);
    }

    render() {
      const { expenses } = this.props;
      return (
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            {
              expenses.map((des) => (
                <tr key={ des.id }>
                  <td>{ des.description }</td>
                  <td>{ des.tag }</td>
                  <td>{ des.method }</td>
                  <td>{ parseFloat(des.value).toFixed(2) }</td>
                  <td>{ (des.exchangeRates[des.currency].name).split('/')[0] }</td>
                  <td>
                    { parseFloat(des.exchangeRates[des.currency].ask).toFixed(2) }
                  </td>
                  <td>
                    {
                      (parseFloat(des.value)
                  * (des.exchangeRates[des.currency].ask)).toFixed(2)
                    }
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      type="button"
                      onClick={ () => this.paraExcluir(des.id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))

            }
          </thead>
        </table>
      );
    }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Tabela.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  remove: (i) => dispatch(exclui(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
