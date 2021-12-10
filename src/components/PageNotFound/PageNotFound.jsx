import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
    return (
        <div>
            <h1>{`:( Page not Found `}</h1>

            <Link to="/">
                <p>Go back home? </p>
            </Link>
        </div>
    );
};

export default PageNotFound;
