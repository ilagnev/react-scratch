import EventEmitter from 'events';
import Todos from '../pages/Todos';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor () {
        super()

        this.loading = false;
        this.todos = [];
        
        //todo run it after storage check
        this.initTodos();
    }

    initTodos() {
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
        this.emit('changed');
    }

    createTodo(title) {
        const newId = this.todos[this.todos.length - 1].id + 1;
        this.todos.push({
            id: newId,
            title,
            complete: false
        });

        console.log(this.todos);
        this.emit('changed');
    }

    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(index, 1);
        
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
                break;
            }
            case "REMOVE_TODO": {
                this.removeTodo(action.id);
                break;
            }
            case "FETCH_TODOS_END": {
                this.todos = action.todos;
                this.emit('changed');
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
