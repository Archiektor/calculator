import React, {useReducer} from 'react';
import './Wrapper.css';
import {Screen} from '../Screen/Screen';
import {
    calculatorReducer, onNumberClickAC, onResetClickAC,
} from '../../reducer/calculatorReducer';
import {Button} from '../Button/Button';

export const Wrapper = () => {
    const [screenInfo, dispatchScreenInfo] = useReducer(calculatorReducer, {screenInfo: 0});

    enum BtnClasses {
        Usual = 'btn',
        Middle = 'btn-middle',
        Light = 'btn-light',
        Dark = 'btn-dark'
    }

    const onNumberClick = (num: number) => {
        dispatchScreenInfo(onNumberClickAC(num));
    }

    const onResetClick = (num: number) => {
        dispatchScreenInfo(onResetClickAC());
    }

    return (

        <div className={'wrapper'}>
            <Screen value={screenInfo}/>
            {/*todo wrap in useMemo*/}
            <div className={'btnWrapper'}>
                <Button name={'0'} classes={`${BtnClasses.Usual} ${BtnClasses.Light}`} callback={onNumberClick}/>
                <Button name={'1'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'2'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'3'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'4'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'5'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'6'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'7'} classes={`${BtnClasses.Usual} ${BtnClasses.Middle}`} callback={onNumberClick}/>
                <Button name={'+'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={() => {
                }}/>
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
                <Button name={'<'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={() => {
                }}/>
                <Button name={'C'} classes={`${BtnClasses.Usual} ${BtnClasses.Dark}`} callback={onResetClick}/>
            </div>
        </div>
    );
};

