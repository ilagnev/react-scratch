import React from 'react';
import Todo from '../components/Todo';

export default class Todos extends React.Component {
    constructor (props) {
        super(props);
        props.setPageTitle('Todos');
        
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Learn react",
                    complete: false,
                },
                {
                    id: 2,
                    title: "Find job",
                    complete: false,
                },
            ]
        };
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
                </div>
            </div>
        )
    }
}