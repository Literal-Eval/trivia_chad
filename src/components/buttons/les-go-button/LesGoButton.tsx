import React, { useContext, useEffect } from "react";
import QuestionContext from "../../../context/question_context";
import fillModel from "../../../helpers-funcs/m-fill-model";

import "../HugeButton.css";

const LesGoButton = (): JSX.Element => {
    var ctx = useContext(QuestionContext);

    async function handleClick() {
        ctx.qStatus = "fetching";
        await fillModel(ctx.questions);
        ctx.qStatus = "fetched";
    }

    return (
        <button onClick={handleClick} className="btn-huge next-btn">
            <p>Lesss Go</p>
        </button>
    );
};

export default LesGoButton;
