import React from "react";

import "./QOption.css";

const Option = (props: any): JSX.Element => {
    return (
        <div onClick={props.onClick} className="option">
            <p className="option-text">{props.children}</p>
            <div className={`is-chosen-circle ${props.isChosen ? 'on': ''}`}></div>
        </div>
    );
};

export default Option;
