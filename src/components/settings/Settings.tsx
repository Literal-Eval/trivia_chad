import React from "react";

import CategoryCard from "../../containers/settings-cards/CategoryCard";
import DifficultyCard from "../../containers/settings-cards/DifficultyCard";
import NumberOfQuestionsCard from "../../containers/settings-cards/NumberOfQuestionsCard";
import TypeCard from "../../containers/settings-cards/TypeCard";

import "./Settings.css";

const Settings = (): JSX.Element => {
    return (
        <div className="settings">
            <CategoryCard height={"100%"} margin={"20% 0 0 0"}></CategoryCard>
            <NumberOfQuestionsCard></NumberOfQuestionsCard>
            <DifficultyCard
                height={"100%"}
                margin={"20% 0 0 0"}
            ></DifficultyCard>
            <TypeCard></TypeCard>
        </div>
    );
};

export default Settings;
