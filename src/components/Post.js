import React, { Component } from 'react';

class Post extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      img: "",
      content: "",
      author: "",
      authorPicture: ""
    }
  }

  getPostInformation() {

  }

  render() {
    return (
      <div>
        <div>this is the Post component</div>
      </div>
    )
  }
}

export default Post