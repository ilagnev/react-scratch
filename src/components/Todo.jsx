import React from 'react';

export default (props) =>  {
    return   <li class="list-group-item">
        <span class="badge">{+props.complete}</span>
        {props.id} {props.title} 
    </li>
};
