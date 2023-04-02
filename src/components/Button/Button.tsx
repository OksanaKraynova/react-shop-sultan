import React from 'react';
import { IButton } from '../../types/IButton';

const Button  = ({text, img, className, onClick, disabled} : IButton) => {
    return (
        <button disabled={disabled} className={className} onClick={onClick}>
            <span>{text}</span>
            {img &&  <img alt={text} src={img} />}
           
        </button>
    );
};

export default Button;