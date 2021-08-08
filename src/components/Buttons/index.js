import React from 'react';
import Button from '../Button';
import './style.css';

const Buttons = ({ onCalcBtnPress }) => {
    return (
        <div className="buttons">
            <div className="row">
                <Button onCalcBtnPress={onCalcBtnPress} name="%" />
                <Button onCalcBtnPress={onCalcBtnPress} name="CE" />
                <Button onCalcBtnPress={onCalcBtnPress} name="C" />
                <Button onCalcBtnPress={onCalcBtnPress} name="<-" />
            </div>

            <div className="row">
                <Button onCalcBtnPress={onCalcBtnPress} name="log x" />
                <Button onCalcBtnPress={onCalcBtnPress} name="x²" />
                <Button onCalcBtnPress={onCalcBtnPress} name="√" />
                <Button onCalcBtnPress={onCalcBtnPress} name="÷" />
            </div>

            <div className="row">
                <Button onCalcBtnPress={onCalcBtnPress} name="7" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="8" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="9" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="x" />
            </div>

            <div className="row">
                <Button onCalcBtnPress={onCalcBtnPress} name="4" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="5" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="6" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="-" />
            </div>

            <div className="row">
                <Button onCalcBtnPress={onCalcBtnPress} name="1" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="2" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="3" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="+" />
            </div>

            <div className="row">
                <Button onCalcBtnPress={onCalcBtnPress} name="+/-" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="0" white />
                <Button onCalcBtnPress={onCalcBtnPress} name="." white />
                <Button onCalcBtnPress={onCalcBtnPress} name="=" />
            </div>
        </div>
    )
}

export default Buttons;
