import React from 'react';
import './style.css';

export const ClearButton = props => (
    <div className="clear-btn-cont" onClick={props.handleClear}>
        { props.children }
    </div>
);