import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__header">{`:( Page not Found `}</h1>

            <Link to="/">
                <p className="not-found__text">Go back home? </p>
            </Link>
        </div>
    );
};

export default PageNotFound;
