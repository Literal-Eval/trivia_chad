import React from "react";

import "./Card.css";

const Card = (props: any): JSX.Element => {
    return (
        <div
            className="card"
            style={{ width: props.width, height: props.height }}
        >
            {props.children}
        </div>
    );
};

export default Card;
