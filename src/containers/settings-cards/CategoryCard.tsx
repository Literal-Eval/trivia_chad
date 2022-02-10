import React, { useState } from "react";

import Card from "../../components/card/Card";
import BookIcon from "../../svgs/book-icon/BookIcon";

import "./SettingsCard.css";

const CategoryCard = (props: any): JSX.Element => {
    let [categoryState, setCategoryState] = useState("tf");

    return (
        <Card height={props.height} margin={props.margin}>
            <div className="settings-card">
                <BookIcon></BookIcon>
                <h3 className="setting-card-title">Category</h3>
                <p className="setting-card-text">Books</p>
            </div>
        </Card>
    );
};

export default CategoryCard;
