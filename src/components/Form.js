import React, { Component } from 'react';
import Nav from './Nav';

class Form extends Component {
  render() {
    return (
      <div className="logged-in">
        <Nav />
        <div>this is the Form component</div>
      </div>
    )
  }
}

export default Form