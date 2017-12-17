import React from 'react';

import * as TodoActions from '../actions/TodoActions';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }
    }

    createTodo() {
        const todoTitle = this.state.inputValue;

        // check title before pushing to store
        if (todoTitle.length === 0) {
            //todo show ui message
            return console.error('title must be not empty');
        }

        TodoActions.createTodo(todoTitle);
        this.updateValue('');
    }

    loadTodo() {
        TodoActions.loadTodos();
    }

    updateValue(newValue) {
        this.setState({
            inputValue: newValue
        });
    }

    render () {
        return (
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon" style={{padding: 0}}>
                    <button 
                        onClick={this.loadTodo.bind(this)}
                        class="btn btn-default" 
                        style={{padding: "7px 15px"}} >
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                    </button>
                </span>
                <input 
                    type="text" 
                    class="form-control" 
                    value={this.state.inputValue}
                    onChange={e => this.updateValue(e.target.value)} />
                <span class="input-group-btn">
                    <button onClick={this.createTodo.bind(this)} class="btn btn-default" type="button">Add</button>
                </span>
            </div>
        </div>
        )
    }
}
