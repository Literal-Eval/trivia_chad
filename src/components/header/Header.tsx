import React from "react";
import GitHubIcon from "../../svgs/GitHub-icon/GitHubIcon";

import "./Header.css";

const Header = (): JSX.Element => {
    return (
        <header className="heamder">
            <h2 className="trivia-chad-title">Trivia Chad</h2>
            <a className="gh-link" href="https://github.com/Literal-Eval/trivia_chad" target={"_blank"}>
                <GitHubIcon></GitHubIcon>
            </a>
        </header>
    );
};

export default Header;
