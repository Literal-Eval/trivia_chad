import React, { useState } from "react";
import QuestionContext from "./question_context";

const QuestionContextProvider = (props: any): JSX.Element => {
    var [qStatusState, setQStatusState] = useState("idle");
    var [qNumberState, setQNumberState] = useState(0);

    return (
        <QuestionContext.Provider
            value={{ qStatus: qStatusState, qNumber: qNumberState }}
        >
            {props.children}
        </QuestionContext.Provider>
    );
};

export default QuestionContextProvider;
