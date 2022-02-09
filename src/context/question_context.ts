import React from "react";
import Questions, { Question } from "../models/questions";

const QuestionContext = React.createContext({
    qStatus: "idle",
    setQStatus: function (newQStatus: string): void {},
    qNumber: 0,
    setQNumber: function (newQNumber: number): void {},
    chosenOption: -1,
    setChosenOption: function (index: number): void {},
    questions: Questions,
    setQuestions: function (newQuestions: Question[]): void {},
    score: 0,
    setScore: function (newScore: number): void {}
});

export default QuestionContext;
