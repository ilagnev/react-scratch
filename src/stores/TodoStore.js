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
    
    getAll() {
        return this.todos;
    }
}

export default new TodoStore;
