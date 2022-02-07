import React, { useState } from "react";
import { Question } from "../models/questions";
import QuestionContext from "./question_context";

const QuestionContextProvider = (props: any): JSX.Element => {
    var [qStatusState, setQStatusState] = useState("idle");
    var [qNumberState, setQNumberState] = useState(0);
    var [questionsState, setQuestionsState] = useState([] as Question[]);

    return (
        <QuestionContext.Provider
            value={{
                qStatus: qStatusState,
                setQStatus: setQStatusState,
                qNumber: qNumberState,
                setQNumber: setQNumberState,
                questions: questionsState,
                setQuestions: setQuestionsState,
            }}
        >
            {props.children}
        </QuestionContext.Provider>
    );
};

export default QuestionContextProvider;
