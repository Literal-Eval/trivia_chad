import React, { useContext, useEffect, useState } from "react";

import Card from "../../components/card/Card";
import QuestionContext from "../../context/question_context";
import QOption from "../option/QOption";
import QuestionTitle from "../question-title/QuestionTitle";

import "./QuestionCard.css";

const QuestionCard = (props: any): JSX.Element => {
    let ctx = useContext(QuestionContext);

    let [question, setQuestion] = useState(ctx.questions[0]);

    let parser = new DOMParser();

    useEffect(() => {
        setQuestion(ctx.questions[ctx.qNumber]);
    }, [ctx.qNumber, ctx.questions]);

    return (
        <Card width="80%" height="70%">
            <div className="question-card">
                <QuestionTitle>
                    {
                        parser.parseFromString(question.title, "text/html").body
                            .textContent
                    }
                </QuestionTitle>
                <QOption isChosen={false}>{question.options[0]}</QOption>
                <QOption isChosen={false}>{question.options[1]}</QOption>
                <QOption isChosen={false}>{question.options[2]}</QOption>
                <QOption isChosen={false}>{question.options[3]}</QOption>
            </div>
        </Card>
    );
};

export default QuestionCard;
