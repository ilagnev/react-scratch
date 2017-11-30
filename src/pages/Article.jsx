import React from 'react';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        props.setPageTitle('-- single article title --');
    }
    render() {
        // console.log('article props', this.props);
        const { params } = this.props.match;

        return (
            <div class="row">
                <div className="container">
                    <h2>-- article title --</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam minus voluptatum saepe modi repudiandae eaque mollitia nisi ea fugiat eveniet culpa nesciunt eos nihil non labore quis, neque at reiciendis!</p>
                </div>
            </div>
        )
    }
}