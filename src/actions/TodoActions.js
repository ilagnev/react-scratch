import dispatcher from '../dispatcher';

export function createTodo(title){
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        title
    })
};

export function removeTodo(id){
    dispatcher.dispatch({
        type: 'REMOVE_TODO',
        id
    })
};

export function loadTodos() {
    // fetch('http://some.api/get').then(_dispatch_event_)

    // in this variant store will load data by himself
    dispatcher.dispatch({
        type: 'LOAD_TODOS'
    })
}

export function completeTodo(id){
    dispatcher.dispatch({
        type: 'COMPLETE_TODO',
        id
    })
};

export function uncompleteTodo(id){
    dispatcher.dispatch({
        type: 'UNCOMPLETE_TODO',
        id
    })
};