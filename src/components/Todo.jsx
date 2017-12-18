import React from 'react';
import * as TodoActions from '../actions/TodoActions';
import './Todo.css';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {todo: props.todo};

        this.toggleTodo = this.toggleTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
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

    removeTodo(e) {
        e.preventDefault();
        console.log('remove todo: ', this.state.todo);
        TodoActions.removeTodo(this.state.todo.id);
    }
    
    render() {
        const { todo } = this.state;
        const checked = todo.complete ? 'checked' : '' ;

        return (
            <li class="list-group-item todo-item">
                <input 
                    type="checkbox" 
                    onChange={this.toggleTodo}
                    id={todo.id} 
                    checked={checked} />
                <label for={todo.id}>
                    {todo.id} {todo.title} 
                    {/* <span class="badge"><a href="#" class="btn btn-info">X</a></span> */}
                    <button 
                        onClick={this.removeTodo}
                        type="button"
                        class="btn btn-link btn-sm pull-right" >
                        <i class="fa fa-remove" aria-hidden="true"></i>
                    </button>
                </label>
            </li>
        )
    }
}
