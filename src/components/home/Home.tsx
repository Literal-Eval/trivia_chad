import React from "react";

import Phone from "../../containers/phone/Phone";
import Config from "../config/Config";
import Header from "../header/Header";

import "./Home.css";

const Home = (): JSX.Element => {
    return (
        <div className="home">
            <Header></Header>
            <Config></Config>
            <Phone></Phone>
        </div>
    );
};

export default Home;
