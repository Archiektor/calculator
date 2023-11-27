import React from 'react';
import './Screen.css';
import {CalcStateType} from '../../reducer/calculatorReducer';

type ScreenType = {
    value: CalcStateType
}

export const Screen: React.FC<ScreenType> = ({value}) => {
    return (
        <div className={'screen'}>
            <div className={'additionalScreen'}>
                {value.additionalScreenInfo !== 0 && value.additionalScreenInfo}
            </div>
            {value.screenInfo}
        </div>
    );
};

