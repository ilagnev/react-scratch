import React from 'react';
import * as TodoActions from '../../actions/TodoActions';
import dispatcher from '../../dispatcher';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            loading: false,
            warning: false,
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
            this.setState({warning: true});
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
            inputValue: newValue,
            warning: false,
        });
    }

    render () {
        const loading = this.state.loading ? 'fa-spin' : '';
        const warning = this.state.warning ? 'has-warning' : '';
        return (
        <div class={`form-group ${warning}`}>
            <form onSubmit={this.createTodo.bind(this)}>
                <div class="input-group">
                    <span class="input-group-btn" style={{padding: 0}}>
                        <button 
                            onClick={this.loadTodo.bind(this)}
                            type="button"
                            class="btn btn-default" >
                            <i class={`fa fa-refresh ${loading}`} aria-hidden="true"></i>
                        </button>
                    </span>
                    <input 
                        type="text" 
                        class="form-control" 
                        value={this.state.inputValue}
                        placeholder="type new todo title"
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
