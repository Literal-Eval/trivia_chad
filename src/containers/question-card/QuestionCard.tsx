import React, { useContext, useEffect, useState } from "react";

import Card from "../../components/card/Card";
import QuestionContext from "../../context/question_context";
import QOption from "../option/QOption";
import QuestionTitle from "../question-title/QuestionTitle";

import "./QuestionCard.css";

const QuestionCard = (props: any): JSX.Element => {
    let ctx = useContext(QuestionContext);

    let [question, setQuestion] = useState(ctx.questions[0]);
    let [chosenData, setChosenData] = useState([false, false, false, false]);

    let parser = new DOMParser();

    useEffect(() => {
        setQuestion(ctx.questions[ctx.qNumber]);
    }, [ctx.qNumber, ctx.questions]);

    const handleClick = (index: number): void => {
        setChosenData((oldState: boolean[]): boolean[] => {

            let enable = !oldState[index];

            // oldState.fill(false) won't work as it'll still be
            // the same reference, and essentially the same state
            // to React

            oldState = [false, false, false, false];
            oldState[index] = enable;

            return oldState;
        });
    };

    return (
        <Card width="80%" height="70%">
            <div className="question-card">
                <QuestionTitle>
                    {
                        parser.parseFromString(question.title, "text/html").body
                            .textContent
                    }
                </QuestionTitle>
                <QOption
                    onClick={() => handleClick(0)}
                    isChosen={chosenData[0]}
                >
                    {question.options[0]}
                </QOption>
                <QOption
                    onClick={() => handleClick(1)}
                    isChosen={chosenData[1]}
                >
                    {question.options[1]}
                </QOption>
                <QOption
                    onClick={() => handleClick(2)}
                    isChosen={chosenData[2]}
                >
                    {question.options[2]}
                </QOption>
                <QOption
                    onClick={() => handleClick(3)}
                    isChosen={chosenData[3]}
                >
                    {question.options[3]}
                </QOption>
            </div>
        </Card>
    );
};

export default QuestionCard;
