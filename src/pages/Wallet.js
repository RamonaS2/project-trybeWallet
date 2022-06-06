import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { fethApi } from '../actions';
import Form from './Forms';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fethApi());
  }

  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <Form />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null, null)(Wallet);
