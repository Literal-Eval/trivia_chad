import React from "react";
import Questions from "../models/questions";

const QuestionContext = React.createContext({
    qStatus: "idle",
    qNumber: 0,
    questions: Questions,
});

export default QuestionContext;
