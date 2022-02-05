import React from "react";

import QuestionMeter from "../../containers/question-meter/QuestionMeter";
import NextButton from "../buttons/next-button/NextButton";
import QuestionCard from "../question-card/QuestionCard";
import PhoneScreen from "../screen/PhoneScreen";
import "./Home.css";

const Home = (): JSX.Element => {
    return (
        <div className="home">
            <PhoneScreen>
                <QuestionMeter></QuestionMeter>
                <QuestionCard></QuestionCard>
                <NextButton></NextButton>
            </PhoneScreen>
        </div>
    );
};

export default Home;
