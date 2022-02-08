import React from "react";

import "../HugeButton.css";

const HugeButton = (props: any): JSX.Element => {
    return (
        <button className="btn-huge next-btn" onClick={props.onClick}>
            <p>{props.children}</p>
        </button>
    );
};

export default HugeButton;
