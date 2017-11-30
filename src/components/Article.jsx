import React from 'react';
import { Link } from 'react-router-dom';

const Article = props => {
    return (
        <div class="col-md4">
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum saepe cumque error natus repellendus aliquid labore eius earum, blanditiis eos obcaecati distinctio ea voluptates. Et nam culpa provident eligendi!</p>    
            <Link to={`/articles/${props.title}`} className="btn btn-default">More info</Link>
        </div>
    )
}

export default Article;