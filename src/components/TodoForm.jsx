import React from 'react';
import * as TodoActions from '../actions/TodoActions';
import dispatcher from '../dispatcher';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            loading: false,
        }

        this.handleActions = this.handleActions.bind(this);
    }

    // listen for loading actions - to animate loading spinner
    componentWillMount() {
        this.state.token = dispatcher.register(this.handleActions);
    }
    componentWillUnmount() {
        dispatcher.unregister(this.state.token);
    }
    handleActions(action) {
        switch (action.type) {
            case 'LOADING_START':
                this.setState({loading: true});
                break;
            case 'LOADING_END':
                this.setState({loading: false});
                break;
        }
    }

    createTodo(e) {
        e.preventDefault();
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
        const loading = this.state.loading ? 'fa-spin' : '';
        return (
        <div class="form-group">
            <form onSubmit={this.createTodo.bind(this)}>
                <div class="input-group">
                    <span class="input-group-addon" style={{padding: 0}}>
                        <button 
                            onClick={this.loadTodo.bind(this)}
                            type="button"
                            class="btn btn-default" 
                            style={{padding: "7px 15px"}} >
                            <i class={`fa fa-refresh ${loading}`} aria-hidden="true"></i>
                        </button>
                    </span>
                    <input 
                        type="text" 
                        class="form-control" 
                        value={this.state.inputValue}
                        onChange={e => this.updateValue(e.target.value)} />
                    <span class="input-group-btn">
                        <button 
                            onClick={this.createTodo.bind(this)} 
                            type="button"
                            class="btn btn-default" >
                            Add
                        </button>
                    </span>
                </div>
            </form>
        </div>
        )
    }
}
