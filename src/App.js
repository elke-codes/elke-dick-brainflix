/// --- APP.JS --- ///

import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/video/:videoID" component={HomePage} />
                    <Route path="/upload" component={VideoUploadPage} />
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
