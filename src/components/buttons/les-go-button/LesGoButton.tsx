import React, { useContext } from "react";
import QuestionContext from "../../../context/question_context";
import fillModel from "../../../helpers-funcs/m-fill-model";

import "../HugeButton.css";

const LesGoButton = (): JSX.Element => {
    var ctx = useContext(QuestionContext);

    async function handleClick() {
        ctx.setQStatus("fetching");
        await fillModel(ctx.questions);
        ctx.setQStatus("fetched");
    }

    return (
        <button onClick={handleClick} className="btn-huge next-btn">
            <p>Lesss Go</p>
        </button>
    );
};

export default LesGoButton;
