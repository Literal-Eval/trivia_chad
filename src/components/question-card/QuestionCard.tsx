import React from "react";

import Card from "../card/Card";
import QOption from "../../containers/option/QOption";
import "./QuestionCard.css";
import Question from "../../containers/question/Question";

const QuestionCard = (props: any): JSX.Element => {
    return (
        <Card width="80%" height="70%">
            <div className="question-card">
                <Question>Which woman do you like the most of all ?</Question>
                <QOption isChosen={true}>Your mom madafaqa</QOption>
                <QOption isChosen={false}>Your mom madafaqa</QOption>
                <QOption isChosen={false}>Your mom madafaqa</QOption>
                <QOption isChosen={false}>Your mom madafaqa</QOption>
            </div>
        </Card>
    );
};

export default QuestionCard;
