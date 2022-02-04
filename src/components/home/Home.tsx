import React from "react";

import QuestionMeter from "../../containers/question-meter/QuestionMeter";
import NextButton from "../buttons/next-button/NextButton";
import PhoneScreen from "../screen/PhoneScreen";
import "./Home.css";

const Home = (): JSX.Element => {
    return (
        <div className="home">
            <PhoneScreen>
                <QuestionMeter></QuestionMeter>
                <NextButton></NextButton>
            </PhoneScreen>
        </div>
    );
};

export default Home;
