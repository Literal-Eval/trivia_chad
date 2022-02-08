import React from "react";

import "./Header.css";

const Header = (): JSX.Element => {
    return (
        <header className="heamder">
            <h2 className="trivia-chad-title">Trivia Chad</h2>
            <a className="gh-link" href="https://github.com/Literal-Eval/trivia_chad">
                <i className="fab fa-github"></i>
            </a>
        </header>
    );
};

export default Header;
