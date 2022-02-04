import React from "react";

import "./PhoneScreen.css";

const PhoneScreen = (props: any): JSX.Element => {
    return <div className="pscreen">{props.children}</div>;
};

export default PhoneScreen;
