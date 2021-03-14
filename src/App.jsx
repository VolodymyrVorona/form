import React, { Component } from 'react';
import Form from './components/Form/form';

export default class App extends Component {
  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);

  };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
