import React from "react";

import "./QuestionMeter.css";

const QuestionMeter = (props: any): JSX.Element => {
    return (
        <div className="question-meter">
            <div className="question-count">
                Question {props.questionNumber}{" "}
                <span className="total-questions">/{props.totalQuestions}</span>
            </div>
            <div className="question-progress-meter">
                <div className="question-progress" style={{width: "20%"}}></div>
            </div>
        </div>
    );
};

export default QuestionMeter;
