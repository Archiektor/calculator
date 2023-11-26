import React from 'react';
import './Wrapper.css';
import {Screen} from '../Screen/Screen';

export const Wrapper = () => {
    return (
        <div className={'wrapper'}>
            <Screen/>
            <div className={'btnWrapper'}>
                12345
            </div>
        </div>
    );
};

