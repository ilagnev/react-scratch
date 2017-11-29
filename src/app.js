console.log(`hello i'm webpacked 🌚`);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from './pages/Home';
import Articles from './pages/Articles';
import Settings from './pages/Settings';

ReactDOM.render(
    <HashRouter>
        <Layout>
            <Route exact path="/" component={Home}/>
            <Route exact path="/articles" name="articles" component={Articles}/>
            <Route exact path="/articles/:article" name="article" component={Articles}/>
            <Route path="/settings" component={Settings}/>
        </Layout>
    </HashRouter>,
    document.getElementById('app')
);