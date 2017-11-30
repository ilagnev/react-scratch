import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
    const { pathname:path } = props.location;
    const active = {
        home: path === '/' ? 'active' : '',
        articles: path.match(/\/articles/) ? 'active' : '',
        settings: path.match(/\/settings/) ? 'active' : ''
    }

    return (<nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Scratch</a>
            </div>
            
            <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false">
                <ul class="nav navbar-nav">
                    <li class={active.home}><Link to="/">Home</Link></li>
                    <li class={active.articles}><Link to="/articles">Articles</Link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class={active.settings}><Link to="/settings">Settings</Link></li>
                </ul>
            </div>
        </div>
    </nav>)
}

export default Nav;