import EventEmitter from 'events';
import Todos from '../pages/Todos';
import dispatcher from '../dispatcher';

import * as TodoActions from '../actions/TodoActions';
import LocalStorage from './LocalStorage';

const defaultTodos = [
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
];

export const LOCAL_STORAGE_KEY = 'react-scratch-todos';

class TodoStore extends EventEmitter {
    constructor () {
        super()

        this.loading = false;
        this.todos = [];
        
        // init local storage
        this.storage = new LocalStorage(LOCAL_STORAGE_KEY, this.loadTodos.bind(this));

        // when store changed - sync data with store
        this.on('changed', this.syncTodos.bind(this));
        
        this.initTodos();
    }

    // check data in localStorage, or init with default
    initTodos() {
        console.log('init todos, key: ', this.storage.checkKey())
        if (this.storage.checkKey()) {
            this.loadTodos();
        } else {
            this.updateTodos(defaultTodos);
        }
    }

    updateTodos(todos) {
        this.todos = todos;
        this.emit('changed');
    }

    loadTodos() {
        // emulate network delay
        this.setLoading(true);
        const randTimeout = Math.floor(Math.random() * 1000);
        console.log("random timeout: ", randTimeout);
        setTimeout(() => {
            console.log('data loaded');
            this.setLoading(false);
            this.updateTodos(this.storage.getData());
        }, randTimeout);
    }

    setLoading(isLoading) {
        this.loading = isLoading;
        this.loading
            ? TodoActions.loadingStart()
            : TodoActions.loadingEnd()
    }

    syncTodos() {
        console.log('save todos -> localstorage', this.todos);
        this.storage.saveData(this.todos);
    }

    createTodo(title) {
        const newId = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
        this.todos.push({
            id: newId,
            title,
            complete: false
        });

        this.emit('changed');
    }

    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== false) {
            this.todos.splice(index, 1);
            this.emit('changed');
        }
    }

    setComplete(id, isCompleted) {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex !== false) {
            this.todos[todoIndex].complete = isCompleted;
            this.updateTodos(this.todos);
        }
    }
    
    getAll() {
        return this.todos;
    }

    handleActions(action) {
        console.log(action);
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.title);
                break;
            }
            case "REMOVE_TODO": {
                this.removeTodo(action.id);
                break;
            }
            case "LOAD_TODOS": {
                // release dispatcher action to prevent
                // "Cannot dispatch in the middle of a dispatch"
                setTimeout(() => {
                    this.loadTodos();
                }, 0);
                break;
            }
            case "COMPLETE_TODO": {
                this.setComplete(action.id, true);
                break;
            }
            case "UNCOMPLETE_TODO": {
                this.setComplete(action.id, false);
                break;
            }
            default:
                break;
        }
    }
}

const store = new TodoStore;
dispatcher.register(store.handleActions.bind(store));

export default store;
