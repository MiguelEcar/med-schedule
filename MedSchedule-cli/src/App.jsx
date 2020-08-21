import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import { Theme } from '@theme';
import { history } from '@theme';
import { PrivateRoute } from '@theme';

import { Login } from './pages';
import { Appoint } from './pages';
import { Doctor } from './pages';
import { Customer } from './pages';

import './App.css';
import './styles/theme.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

class App extends React.Component {

  /////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <>
        <Router history={history}>

          <Switch>
            <Theme>
              <ToastContainer />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/' component={Appoint} />
              <PrivateRoute path='/doctor' component={Doctor} />
              <PrivateRoute path='/customer' component={Customer} />
              <Redirect from='*' to='/' />
            </Theme>
          </Switch>

        </Router>
      </>
    );
  }
  /////////////////////////////////////////////////////////////////////////////////
}

function mapStateToProps(state) {
  const { alert } = state;
  return { alert };
}

export const mapDispatchToProps = {}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };