import React from "react";
import Questions, { Question } from "../models/questions";

const QuestionContext = React.createContext({
    qStatus: "idle",
    setQStatus: function (newQStatus: string): void {},
    qNumber: 0,
    setQNumber: function (newQNumber: number): void {},
    questions: Questions,
    setQuestions: function (newQuestions: Question[]): void {},
});

export default QuestionContext;
