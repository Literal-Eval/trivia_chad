import React, { useContext, useEffect, useState } from "react";

import PhoneScreen from "../../components/screen/PhoneScreen";
import HugeButton from "../../components/buttons/huge-button/HugeButton";
import QuestionCard from "../question-card/QuestionCard";
import QuestionMeter from "../../containers/question-meter/QuestionMeter";

import QuestionContext from "../../context/question_context";

import SleepingUnicorn from "../../assets/icons/unicorn_sleep.png";
import WokeUnicorn from "../../assets/icons/unicorn_woke.png";

import "./Phone.css";

const Phone = (props: any): JSX.Element => {
    const ctx = useContext(QuestionContext);
    var [cStatus, setCStatus] = useState(ctx.qStatus);

    useEffect(() => {
        setCStatus(ctx.qStatus);
    }, [ctx.qStatus]);

    const handleNext = () => {
        ctx.setQNumber(ctx.qNumber + 1);
    }

    return (
        <PhoneScreen>
            {cStatus === "fetched" ? (
                <React.Fragment>
                    <QuestionMeter></QuestionMeter>
                    <QuestionCard></QuestionCard>
                    <HugeButton onClick={handleNext}>Next</HugeButton>
                </React.Fragment>
            ) : (
                <img
                    src={cStatus === "idle" ? SleepingUnicorn : WokeUnicorn}
                    alt="Sleeping Unicorn"
                    width={"150px"}
                    height={"150px"}
                ></img>
            )}
        </PhoneScreen>
    );
};

export default Phone;
