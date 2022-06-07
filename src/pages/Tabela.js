import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Tabela extends React.Component {
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
};

export default connect(mapStateToProps)(Tabela);
