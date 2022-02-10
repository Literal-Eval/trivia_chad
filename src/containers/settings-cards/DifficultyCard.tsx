import React from "react";
import Card from "../../components/card/Card";
import DifficultyIcon from "../../svgs/difficulty-icon/DifficultyIcon";

import "./SettingsCard.css";

const DifficultyCard = (props: any): JSX.Element => {
    return (
        <Card height={props.height} margin={props.margin}>
            <div className="settings-card">
                <DifficultyIcon></DifficultyIcon>
                <h3 className="setting-card-title">Difficulty</h3>
                <p className="setting-card-text">Hard</p>
            </div>
        </Card>
    );
};

export default DifficultyCard;
