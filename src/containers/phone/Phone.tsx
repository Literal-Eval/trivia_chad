import React, { useContext, useEffect, useState } from "react";

import PhoneScreen from "../../components/screen/PhoneScreen";
import HugeButton from "../../components/buttons/huge-button/HugeButton";
import QuestionCard from "../question-card/QuestionCard";
import QuestionMeter from "../../containers/question-meter/QuestionMeter";

import QuestionContext from "../../context/question_context";

import ThumbsUpUnicorn from "../../svgs/unicorns/thumbs-up-unicorn/ThumbsUpUnicorn";
import SleepingUnicorn from "../../svgs/unicorns/sleeping-unicorn/SleepingUnicorn";

import "./Phone.css";
import LoadingUnicorn from "../../svgs/unicorns/loading-unicorn/LoadingUnicorn";

const Phone = (props: any): JSX.Element => {
    const ctx = useContext(QuestionContext);
    var [cStatus, setCStatus] = useState(ctx.qStatus);

    useEffect(() => {
        setCStatus(ctx.qStatus);
    }, [ctx.qStatus]);

    const handleNext = () => {
        if (ctx.questions[ctx.qNumber].correctOptionNo === ctx.chosenOption) {
            ctx.setScore(ctx.score + 1);
        }

        if (ctx.qNumber + 1 === ctx.questions.length) {
            ctx.setQStatus("done");
            console.log(ctx.score);
        } else {
            ctx.setQNumber(ctx.qNumber + 1);
            ctx.setChosenOption(-1);
        }
    };

    return (
        <PhoneScreen>
            {cStatus === "done" ? (
                <React.Fragment>
                    <ThumbsUpUnicorn></ThumbsUpUnicorn>
                </React.Fragment>
            ) : cStatus === "fetched" ? (
                <React.Fragment>
                    <QuestionMeter></QuestionMeter>
                    <QuestionCard></QuestionCard>
                    <HugeButton onClick={handleNext}>Next</HugeButton>
                </React.Fragment>
            ) : cStatus === "idle" ? (
                <SleepingUnicorn></SleepingUnicorn>
            ) : (
                <LoadingUnicorn></LoadingUnicorn>
            )}
        </PhoneScreen>
    );
};

export default Phone;
