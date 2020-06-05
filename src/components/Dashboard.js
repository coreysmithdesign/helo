import React, { Component } from 'react';
import Nav from './Nav';

class Dashboard extends Component {
  render() {
    return (
      <div className="logged-in">
        <Nav />
        <div>this is the Dashboard component</div>
      </div>
    )
  }
}

export default Dashboard