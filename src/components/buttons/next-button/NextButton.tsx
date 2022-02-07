import React, { useContext } from "react";
import QuestionContext from "../../../context/question_context";

import "../HugeButton.css";

const NextButton = (): JSX.Element => {

    let ctx = useContext(QuestionContext);

    const handleClick = () => {
        ctx.setQNumber(ctx.qNumber + 1);
    }

    return (
        <button className="btn-huge next-btn" onClick={handleClick}>
            <p>Next</p>
        </button>
    );
};

export default NextButton;
