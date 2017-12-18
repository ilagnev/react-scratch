import React from 'react';
import * as TodoActions from '../actions/TodoActions';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {todo: props.todo};

        this.toggleTodo = this.toggleTodo.bind(this);
    }

    toggleTodo(e) {
        const { todo } = this.state;
        console.log('toggle todo: ', todo);

        const newTodo = {
            ...todo,
            complete: !todo.complete,
        };
        console.log('new todo: ', newTodo);
        this.setState({todo: newTodo});
        
        newTodo.complete
            ? TodoActions.completeTodo(newTodo.id)
            : TodoActions.uncompleteTodo(newTodo.id)
    }
    
    render() {
        const { todo } = this.state;
        const checked = todo.complete ? 'checked' : '' ;

        return (
            <li class="list-group-item">
                <span class="badge">{+todo.complete}</span>
                <input 
                    type="checkbox" 
                    onChange={this.toggleTodo}
                    id={todo.id} 
                    checked={checked} />
                {todo.id} {todo.title} 
            </li>
        )
    }
}
