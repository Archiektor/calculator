import React, {useReducer, useState} from 'react';
import './Wrapper.css';
import {Screen} from '../Screen/Screen';
import {
    calculatorReducer, equalNumberOnClickAC, onNumberClickAC, onResetClickAC, plusNumberOnClickAC,
} from '../../reducer/calculatorReducer';
import {Button} from '../Button/Button';

export const Wrapper = () => {
    const [screenInfoObj, dispatchScreenInfo] = useReducer(calculatorReducer, {screenInfo: 0, additionalScreenInfo: 0});
    const [isOperation, setIsOperation] = useState<boolean>(false);


    enum BtnClasses {
        Usual = 'btn',
        Middle = 'btn-middle',
        Light = 'btn-light',
        Dark = 'btn-dark'
    }

    const onNumberClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatchScreenInfo(onNumberClickAC(+e.currentTarget.innerHTML, isOperation));
        setIsOperation(false);
    }

    const onResetClick = () => {
        dispatchScreenInfo(onResetClickAC());
    }

    const actOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsOperation(true);
        switch (e.currentTarget.innerHTML) {
            case '+':
                dispatchScreenInfo(plusNumberOnClickAC(screenInfoObj.screenInfo));
                break;
            case '=':
                dispatchScreenInfo(equalNumberOnClickAC());
                break;
        }
    }

    return (

        <div className={'wrapper'}>
            <Screen value={screenInfoObj}/>
            {/*todo wrap in useMemo*/}
            <div className={'btnWrapper'}>
                <Button name={'0'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'1'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'2'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'3'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'4'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'5'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'6'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'7'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'+'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={actOnClick}/>
                <Button name={'-'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={() => {
                }}/>
                <Button name={'*'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={() => {
                }}/>
                <Button name={'/'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={() => {
                }}/>
                <Button name={'^n'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={() => {
                }}/>
                <Button name={'x²'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={() => {
                }}/>
                <Button name={'C'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={onResetClick}/>
                <Button name={'='} classes={`${BtnClasses.Usual} ${BtnClasses.Light}`} callback={actOnClick}/>
            </div>
        </div>
    );
};

