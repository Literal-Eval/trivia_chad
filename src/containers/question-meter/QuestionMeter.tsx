import React, { useContext, useEffect, useState } from "react";
import QuestionContext from "../../context/question_context";

import "./QuestionMeter.css";

const QuestionMeter = (props: any): JSX.Element => {
    let ctx = useContext(QuestionContext);

    let [questionNumber, setQuestionNumber] = useState(ctx.qNumber);
    let [totalQuestions, setTotalQuestions] = useState(ctx.questions.length);

    useEffect(() => {
        setQuestionNumber(ctx.qNumber);
        setTotalQuestions(ctx.questions.length);
    }, [ctx.qNumber, ctx.questions.length]);

    return (
        <div className="question-meter">
            <div className="question-count">
                Question {questionNumber + 1}
                <span className="total-questions">/{totalQuestions}</span>
            </div>
            <div className="question-progress-meter">
                <div
                    className="question-progress"
                    style={{ width: `${(questionNumber + 1) * 100 / totalQuestions}%` }}
                ></div>
            </div>
        </div>
    );
};

export default QuestionMeter;
