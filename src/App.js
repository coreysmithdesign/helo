import React from 'react';
import Nav from './components/Nav';
import routes from './routes';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  console.log("App says", props)
  return (
    <div className="App">
      {props.isLoggedIn ? <Nav /> : null}
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App);
