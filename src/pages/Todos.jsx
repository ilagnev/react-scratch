import React from 'react';
import Todo from '../components/Todo/TodoItem';
import TodoForm from '../components/Todo/TodoForm';
import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component {
    constructor (props) {
        super(props);
        props.setPageTitle('Todos');
        
        this.state = {
            todos: TodoStore.getAll()
        };

        this.updateTodosState = this.updateTodosState.bind(this);
    }
    
    componentWillMount() {
        TodoStore.on('changed', this.updateTodosState);
    }
    componentWillUnmount() {
        TodoStore.removeListener('changed', this.updateTodosState);
    }

    updateTodosState() {
        const todos = TodoStore.getAll();
        this.setState({todos});
    }

    render () {
        const todosList = this.state.todos.map(todo => <Todo key={todo.id} todo={todo} />);

        return (
            <div class="row">
                <div class="col-md-offset-3 col-md-6">
                    <TodoForm />
                    <ul class="list-group">
                        {todosList}
                    </ul>
                </div>
            </div>
        )
    }
}