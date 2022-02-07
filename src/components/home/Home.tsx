import React from "react";

import Phone from "../../containers/phone/Phone";
import LesGoButton from "../buttons/les-go-button/LesGoButton";
import Header from "../header/Header";

import "./Home.css";

const Home = (): JSX.Element => {
    return (
        <div className="home">
            <Header></Header>
            <LesGoButton></LesGoButton>
            <Phone></Phone>
        </div>
    );
};

export default Home;
