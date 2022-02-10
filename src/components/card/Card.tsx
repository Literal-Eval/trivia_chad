import React from "react";

import "./Card.css";

const Card = (props: any): JSX.Element => {
    return (
        <div
            className="card"
            style={{
                width: props.width,
                height: props.height,
                margin: props.margin,
                padding: props.padding,
            }}
        >
            {props.children}
        </div>
    );
};

export default Card;
