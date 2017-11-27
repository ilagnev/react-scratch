console.log(`hello i'm webpacked 🌚`);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter } from "react-router-dom";

// import createHashHistory from 'history/createHashHistory';
// const hashHistory = createHashHistory();
// console.log(hashHistory);

import Layout from "./Layout";
import Home from './pages/Home';
import Articles from './pages/Articles';
import Settings from './pages/Settings';

ReactDOM.render(
    <HashRouter>
        <Layout>
            <Route exact path="/" component={Home}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/settings" component={Settings}/>
        </Layout>
    </HashRouter>,
    document.getElementById('app')
);