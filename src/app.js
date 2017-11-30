console.log(`hello i'm webpacked 🌚`);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter } from "react-router-dom";

import Layout from "./Layout";

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={Layout}/>
    </HashRouter>,
    document.getElementById('app')
);