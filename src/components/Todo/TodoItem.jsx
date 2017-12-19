import React from 'react';
import * as TodoActions from '../../actions/TodoActions';
import './TodoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    toggleTodo(e) {
        this.props.todo.complete
            ? TodoActions.uncompleteTodo(this.props.todo.id)
            : TodoActions.completeTodo(this.props.todo.id)
    }

    removeTodo(e) {
        e.preventDefault();
        TodoActions.removeTodo(this.props.todo.id);
    }
    
    render() {
        const { todo } = this.props;
        const checked = todo.complete ? 'checked' : '' ;

        return (
            <li class="list-group-item todo-item">
                <input 
                    type="checkbox" 
                    onChange={this.toggleTodo}
                    id={todo.id} 
                    checked={checked} />
                <label for={todo.id}>
                    {todo.title}
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
