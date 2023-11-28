import React, {useReducer, useState} from 'react';
import './Wrapper.css';
import {Screen} from '../Screen/Screen';
import {
    calculatorReducer, divideNumberOnClickAC, equalNumberOnClickAC, minusNumberOnClickAC, multiplyNumberOnClickAC, onNumberClickAC, onResetClickAC, plusNumberOnClickAC,
} from '../../reducer/calculatorReducer';
import {Button} from '../Button/Button';
enum BtnClasses {
    Usual = 'btn',
    Middle = 'btn-middle',
    Light = 'btn-light',
    Dark = 'btn-dark'
}
export const Wrapper = () => {
    const [screenInfoObj, dispatchScreenInfo] = useReducer(calculatorReducer, {screenInfo: 0, additionalScreenInfo: 0, lastOperation: ''});
    const [isOperation, setIsOperation] = useState<boolean>(false);

    const onNumberClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatchScreenInfo(onNumberClickAC(+e.currentTarget.innerHTML, isOperation));
        setIsOperation(false);
    }

    const onResetClick = () => {
        dispatchScreenInfo(onResetClickAC());
    }

    //todo replace in reduce
    const actOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsOperation(true);
        switch (e.currentTarget.innerHTML) {
            case '+':
                dispatchScreenInfo(plusNumberOnClickAC(screenInfoObj.screenInfo));
                break;
            case '-':
                dispatchScreenInfo(minusNumberOnClickAC(screenInfoObj.screenInfo));
                break;
            case '*':
                dispatchScreenInfo(multiplyNumberOnClickAC(screenInfoObj.screenInfo));
                break;
            case '/':
                dispatchScreenInfo(divideNumberOnClickAC(screenInfoObj.screenInfo));
                break;
            case '=':
                dispatchScreenInfo(equalNumberOnClickAC());
                break;
        }
    }

    type BtnProps = [number, string, BtnClasses, BtnClasses, (event: React.MouseEvent<HTMLButtonElement>) => void];
    const arrOfBtnProps: BtnProps [] = [
        [0, '/', BtnClasses.Usual, BtnClasses.Dark, actOnClick],
        [1, '*', BtnClasses.Usual, BtnClasses.Dark, actOnClick],
        [2, '-', BtnClasses.Usual, BtnClasses.Dark, actOnClick],
        [3, '+', BtnClasses.Usual, BtnClasses.Dark, actOnClick],
        [4, '9', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [5, '8', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [6, '7', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [7, '6', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [8, '5', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [9, '4', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [10, '3', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [11, '2', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [12, '1', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [13, '0', BtnClasses.Usual, BtnClasses.Middle, onNumberClick],
        [14, 'C', BtnClasses.Usual, BtnClasses.Dark, onResetClick],
        [15, '=', BtnClasses.Usual, BtnClasses.Light, actOnClick],
    ]

    return (
        <div className={'wrapper'}>
            <Screen value={screenInfoObj}/>
            {/*todo wrap in useMemo*/}
            <div className={'btnWrapper'}>
                {arrOfBtnProps.map(el => {
                    //todo object not array
                    return <Button key={el[0]} name={el[1]} classes={`${el[2]} ${el[3]}`} callback={el[4]}/>
                })}
            </div>
        </div>
    );
};

