import EventEmitter from 'events';
import Todos from '../pages/Todos';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor () {
        super()
        
        this.todos = [
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
    }

    createTodo(title) {
        this.todos.push({
            id: this.todos[this.todos.length - 1].id++,
            title,
            complete: false
        });

        console.log(this.todos);
        this.emit('changed');
    }
    
    getAll() {
        return this.todos;
    }

    handleActions(action) {
        console.log(action);
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.title);
            }
            default:
                break;
        }
    }
}

const store = new TodoStore;

window.dispatcher = dispatcher;
dispatcher.register(store.handleActions.bind(store));

export default store;
