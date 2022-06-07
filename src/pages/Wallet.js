import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { fethApi } from '../actions';
import Form from './Forms';
import Tabela from './Tabela';

class Wallet extends React.Component {
  componentDidMount() {
    const { aEsperaDeUmMilagre } = this.props;
    aEsperaDeUmMilagre();
  }

  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <Form />
        <Tabela />
      </>
    );
  }
}

Wallet.propTypes = {
  aEsperaDeUmMilagre: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  aEsperaDeUmMilagre: () => dispatch(fethApi()),
});

export default connect(null, mapDispatchToProps)(Wallet);
