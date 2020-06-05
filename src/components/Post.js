import React, { Component } from 'react';
import Nav from './Nav';

class Post extends Component {
  render() {
    return (
      <div className="logged-in">
        <Nav />
        <div>this is the Post component</div>
      </div>
    )
  }
}

export default Post