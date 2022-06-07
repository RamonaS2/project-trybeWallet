import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     total: 0,
  //   };
  // }

   calculoTotal = () => {
     const { expenses } = this.props;
     const total = expenses.reduce((acc, des) => {
       const { value, currency, exchangeRates } = des;
       return acc + (value * exchangeRates[currency].ask);
     }, 0);
     //  this.setState({
     //    total,
     //  });
     return total.toFixed(2);
   }

   render() {
     //  const { total } = this.state;
     const { email } = this.props;
     return (
       <header>
         <p data-testid="email-field">{email}</p>
         <p data-testid="total-field">{this.calculoTotal()}</p>
         <p data-testid="header-currency-field">BRL</p>
       </header>
     );
   }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
