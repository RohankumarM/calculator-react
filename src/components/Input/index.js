import React from 'react';
import './style.css';

const Input = ({ text }) => {
    return (
        <div className="input-container">
            <div>{text}</div>
        </div>
    )
}

export default Input;
