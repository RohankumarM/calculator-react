import React, { Component } from 'react';
import { calculate } from './utils/calculate';
import Buttons from './components/Buttons';
import Input from './components/Input';
import './App.css';

class App extends Component {
  state = {
    total: null,
    operation: null,
    input: null
  }

  handleSubmit = () => {
    //call calculating logic
  };

  handleBtnClick = (value) => {
    this.setState(calculate(this.state, value));
  }

  render() {
    // console.log("total:" + this.state.total, "op:" + this.state.operation, "input:" + this.state.input);
    return (
      <div className="app" >
        <Input text={this.state.input || this.state.total || '0'} />
        <Buttons handleBtnClick={this.handleBtnClick}></Buttons>
      </div>
    );
  }
}

export default App;
