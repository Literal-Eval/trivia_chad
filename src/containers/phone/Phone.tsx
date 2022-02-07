import React from "react";

import PhoneScreen from "../../components/screen/PhoneScreen";
import NextButton from "../../components/buttons/next-button/NextButton";
import QuestionCard from "../../components/question-card/QuestionCard";
import QuestionMeter from "../../containers/question-meter/QuestionMeter";

import './Phone.css';

const Phone = (props: any): JSX.Element => {
    return (
        <PhoneScreen>
            <QuestionMeter></QuestionMeter>
            <QuestionCard></QuestionCard>
            <NextButton></NextButton>
        </PhoneScreen>
    );
};

export default Phone;
