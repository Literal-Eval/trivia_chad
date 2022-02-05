import React from "react";

const QuestionContext = React.createContext({
    qStatus: "idle",
    qNumber: 0,
});

export default QuestionContext;
