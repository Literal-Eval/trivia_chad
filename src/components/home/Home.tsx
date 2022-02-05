import React from "react";

import QuestionMeter from "../../containers/question-meter/QuestionMeter";
import LesGoButton from "../buttons/les-go-button/LesGoButton";
import NextButton from "../buttons/next-button/NextButton";
import QuestionCard from "../question-card/QuestionCard";
import PhoneScreen from "../screen/PhoneScreen";
import "./Home.css";

const Home = (): JSX.Element => {
    return (
        <div className="home">
            <LesGoButton></LesGoButton>
            <PhoneScreen>
                <QuestionMeter></QuestionMeter>
                <QuestionCard></QuestionCard>
                <NextButton></NextButton>
            </PhoneScreen>
        </div>
    );
};

export default Home;
