import React, { Component } from 'react';
import { calculate } from '../../utils/calculate';
import Buttons from '../../components/Buttons';
import Input from '../../components/Input';
import './style.css';

class Calculator extends Component {
    state = {
        total: null,
        operation: null,
        input: null
    }

    handleBtnClick = (value) => {
        this.setState(calculate(this.state, value));
    }

    render() {
        return (
            <div className="calculator">
                <Input text={this.state.input || this.state.total || '0'} />
                <Buttons onCalcBtnPress={this.handleBtnClick}></Buttons>
            </div>
        );
    }
}

export default Calculator;
