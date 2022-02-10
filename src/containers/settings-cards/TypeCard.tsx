import React, { useState } from "react";
import Card from "../../components/card/Card";
import MultipleChoiceIcon from "../../svgs/multiple-choice-icon/MultipleChoiceIcon";
import TrueFalseIcon from "../../svgs/true-false-icon/TrueFalseIcon";

import "./SettingsCard.css";

const TypeCard = (props: any): JSX.Element => {
    let [typeState, setTypeState] = useState("tf");

    return (
        <Card height={props.height} margin={props.margin}>
            <div className="settings-card">
                {typeState === "any" ? (
                    <MultipleChoiceIcon></MultipleChoiceIcon>
                ) : typeState === "tf" ? (
                    <TrueFalseIcon></TrueFalseIcon>
                ) : (
                    <MultipleChoiceIcon></MultipleChoiceIcon>
                )}
                <h3 className="setting-card-title">Type</h3>
                <p className="setting-card-text">
                    {typeState === "any"
                        ? "Any"
                        : typeState === "tf"
                        ? "True/False"
                        : "Multiple"}
                </p>
            </div>
        </Card>
    );
};

export default TypeCard;
