import React from "react";

import Card from "../../components/card/Card";
import EightIcon from "../../svgs/number-icons/EightIcon";

import "./SettingsCard.css";

const NumberOfQuestionsCard = (props: any): JSX.Element => {
    return (
        <Card height={props.height} margin={props.margin}>
            <div className="settings-card">
                <EightIcon></EightIcon>
                <h3 className="setting-card-title">Questions</h3>
                <p className="setting-card-text">8</p>
            </div>
        </Card>
    );
};

export default NumberOfQuestionsCard;
