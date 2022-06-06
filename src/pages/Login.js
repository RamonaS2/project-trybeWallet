import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };
  }

  click = (event) => {
    const { history, userEmail } = this.props;
    const { email } = this.state;
    event.preventDefault();
    userEmail(email);
    history.push('/carteira');
  }

  inputValue = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, senha } = this.state;
    const vefifyEmail = /\S+@\S+\.\S+/;
    const caractereSenha = 6;
    return (
      <>
        <h1>Login</h1>
        <>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="text"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.inputValue }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              id="senha"
              type="text"
              name="senha"
              data-testid="password-input"
              value={ senha }
              onChange={ this.inputValue }
            />
          </label>

          <button
            type="submit"
            disabled={
              caractereSenha > senha.length || !vefifyEmail.test(email)
            }
            onClick={ this.click }
          >
            Entrar
          </button>

        </>
      </>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(setUserEmail(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  userEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
