import React from 'react';
import BackspaceIcon from '@material-ui/icons/Backspace';
import './style.css';

const Button = ({ name, white, handleBtnClick }) => {
    return (
        <div className={`button-container ${white ? "white" : ""}`}>
            <button onClick={() => handleBtnClick(name)}>{name === '<-' ? <BackspaceIcon /> : name}</button>
        </div >
    )
}

export default Button;
