import React from 'react';
import './Button.css';

type ButtonType = {
    name: string
    classes: string
    callback: (num: number) => void
}

export const Button: React.FC<ButtonType> = ({name, classes, callback}) => {

    const onBtnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        //console.log(+e.currentTarget.innerHTML);
        callback(+e.currentTarget.innerHTML);
    }

    return (
        <button onClick={onBtnClickHandler} className={classes}>
            {name}
        </button>
    );
};