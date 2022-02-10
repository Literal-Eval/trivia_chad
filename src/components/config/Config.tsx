import React from "react";
import LesGoButton from "../buttons/les-go-button/LesGoButton";
import Settings from "../settings/Settings";

import "./Config.css";

const Config = (): JSX.Element => {
    return (
        <div className="config">
            <Settings></Settings>
            <LesGoButton></LesGoButton>
        </div>
    );
};

export default Config;