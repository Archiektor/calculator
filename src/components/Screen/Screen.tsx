import React from 'react';
import './Screen.css';
import {CalcStateType} from '../../reducer/calculatorReducer';

type ScreenType = {
    value: CalcStateType
}

export const Screen: React.FC<ScreenType> = ({value}) => {
    return (
        <div className={'screen'}>
            {value.screenInfo}
        </div>
    );
};

