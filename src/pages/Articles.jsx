import React from 'react';
import Article from './../components/Article';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);
        props.setPageTitle('Articles')
    }
    render() {
        return (
            <div class="row">
                <Article id={1} title="Article 1"/>
                <Article id={2} title="Article 2"/>
                <Article id={3} title="Article 3"/>
                <Article id={4} title="Article 4"/>
                <Article id={5} title="Article 1"/>
                <Article id={6} title="Article 2"/>
                <Article id={7} title="Article 3"/>
                <Article id={8} title="Article 4"/>
            </div>
        )
    }
}