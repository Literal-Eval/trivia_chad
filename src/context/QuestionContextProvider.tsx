import React, { useState } from "react";
import { Question } from "../models/questions";
import QuestionContext from "./question_context";

const QuestionContextProvider = (props: any): JSX.Element => {
    var [qStatusState, setQStatusState] = useState("idle");
    var [qNumberState, setQNumberState] = useState(0);
    var [chosenOptionState, setChosenOptionState] = useState(-1);
    var [questionsState, setQuestionsState] = useState([] as Question[]);
    var [scoreState, setScoreState] = useState(0);

    return (
        <QuestionContext.Provider
            value={{
                qStatus: qStatusState,
                setQStatus: setQStatusState,
                qNumber: qNumberState,
                setQNumber: setQNumberState,
                chosenOption: chosenOptionState,
                setChosenOption: setChosenOptionState,
                questions: questionsState,
                setQuestions: setQuestionsState,
                score: scoreState,
                setScore: setScoreState
            }}
        >
            {props.children}
        </QuestionContext.Provider>
    );
};

export default QuestionContextProvider;
