import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      img: "",
      content: ""
    }
  }

  handleSubmit() {

  }

  render() {
    return (
      <div>
        <div>this is the Form component</div>
      </div>
    )
  }
}

export default Form