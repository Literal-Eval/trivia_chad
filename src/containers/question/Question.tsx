import React from "react";

import "./Question.css";

const Question = (props: any): JSX.Element => {
    return (
        <p className="question">
            <span>{props.children}</span>
        </p>
    );
};

export default Question;
