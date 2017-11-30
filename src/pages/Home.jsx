import React from 'react';
import { Link } from 'react-router-dom';

import Article from '../components/Article';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        props.setPageTitle('Yeah beeeach!! 😸')
    }
    render() {
        return <div>
            <div class="well well-lg">
                <h2>Articles</h2>
                <div className="row">
                    <Article id={1} title="Article 1"/>
                    <Article id={2} title="Article 2"/>
                    <Link to="/articles">See all articles 👉</Link>
                </div>
            </div>
        </div>
    }
}