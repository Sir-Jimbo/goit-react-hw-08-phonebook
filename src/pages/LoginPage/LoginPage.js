import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations.js';
import { CSSTransition } from 'react-transition-group';
import authSelectors from '../../redux/auth/auth-selectors';
import Notification from '../../components/Notification/Notification';
import Spinner from '../../components/Spinner/Spinner';
import s from './LoginPage.module.css'

class LoginPage extends Component {
  static propTypes = {
    error: PropTypes.string,
    isLoadingAuth: PropTypes.bool,
  };

  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={s}
          unmountOnExit
        >
          <h1 className={s.title}>Enter your data</h1>
        </CSSTransition>


        <Notification
          message={this.props.error}
        />

        {this.props.isLoadingAuth && <Spinner />}

        <form
          className={s.form}
          onSubmit={this.handleSubmit}
          autoComplete="off">
          <label
            htmlFor="email"
            className={s.label}>
            Email </label>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />


          <label
            htmlFor="password"
            className={s.label}>
            Password</label>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />


          <button
            className={s.button}
            type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: authSelectors.getError(state),
  isLoadingAuth: authSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

