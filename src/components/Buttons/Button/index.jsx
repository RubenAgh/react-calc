import React from 'react';
import './style.css';

const isOperator = val => !isNaN(val) || val === '.' || val === '=';;

export const Button = props => (
    <div 
        className={`
            btn-cont
            ${isOperator(props.children) ? null : 'operator'}
        `}
        onClick={() => props.handleClick(props.children)}

    >
        { props.children }
    </div>
);