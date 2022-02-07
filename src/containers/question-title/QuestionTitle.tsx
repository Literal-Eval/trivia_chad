import React from "react";

import "./QuestionTitle.css";

const QuestionTitle = (props: any): JSX.Element => {
    return (
        <p className="question">
            <span>{props.children}</span>
        </p>
    );
};

export default QuestionTitle;
