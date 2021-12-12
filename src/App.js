/// --- APP.JS --- ///

import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
    console.log("app runs");
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/videos/:videoID" component={HomePage} />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/upload" component={VideoUploadPage} />
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
