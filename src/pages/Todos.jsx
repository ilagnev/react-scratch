import React from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
    constructor (props) {
        super(props);
        props.setPageTitle('Todos');
        
        this.state = {
            todos: TodoStore.getAll()
        };
    }
    
    componentWillMount() {
        window.todostore = TodoStore;
        TodoStore.on('changed', () => {
            this.setState({
                todos: TodoStore.getAll()
            });
        })
    }

    createTodo() {
        TodoActions.createTodo(Date.now());
    }

    render () {
        const { todos } = this.state;

        const todosList = todos.map(todo => <Todo key={todo.id} {...todo} />);

        return (
            <div class="row">
                <div class="col-md-offset-4 col-md-4">
                    <ul class="list-group">
                        {todosList}
                    </ul>
                    <button class="btn btn-default" onClick={this.createTodo.bind(this)}>create</button>
                </div>
            </div>
        )
    }
}