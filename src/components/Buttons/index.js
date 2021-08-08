import React from 'react';
import Button from '../Button';
import './style.css';

const Buttons = ({ handleBtnClick }) => {
    return (
        <div className="buttons">
            <div className="row">
                <Button handleBtnClick={handleBtnClick} name="%" />
                <Button handleBtnClick={handleBtnClick} name="CE" />
                <Button handleBtnClick={handleBtnClick} name="C" />
                <Button handleBtnClick={handleBtnClick} name="<-" />
            </div>

            <div className="row">
                <Button handleBtnClick={handleBtnClick} name="log x" />
                <Button handleBtnClick={handleBtnClick} name="x²" />
                <Button handleBtnClick={handleBtnClick} name="√" />
                <Button handleBtnClick={handleBtnClick} name="÷" />
            </div>

            <div className="row">
                <Button handleBtnClick={handleBtnClick} name="7" white />
                <Button handleBtnClick={handleBtnClick} name="8" white />
                <Button handleBtnClick={handleBtnClick} name="9" white />
                <Button handleBtnClick={handleBtnClick} name="x" />
            </div>

            <div className="row">
                <Button handleBtnClick={handleBtnClick} name="4" white />
                <Button handleBtnClick={handleBtnClick} name="5" white />
                <Button handleBtnClick={handleBtnClick} name="6" white />
                <Button handleBtnClick={handleBtnClick} name="-" />
            </div>

            <div className="row">
                <Button handleBtnClick={handleBtnClick} name="1" white />
                <Button handleBtnClick={handleBtnClick} name="2" white />
                <Button handleBtnClick={handleBtnClick} name="3" white />
                <Button handleBtnClick={handleBtnClick} name="+" />
            </div>

            <div className="row">
                <Button handleBtnClick={handleBtnClick} name="+/-" white />
                <Button handleBtnClick={handleBtnClick} name="0" white />
                <Button handleBtnClick={handleBtnClick} name="." white />
                <Button handleBtnClick={handleBtnClick} name="=" />
            </div>
        </div>
    )
}

export default Buttons;
