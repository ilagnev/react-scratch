import EventEmitter from 'events';

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

        this.emit('changed');
    }
    
    getAll() {
        return this.todos;
    }
}

export default new TodoStore;
