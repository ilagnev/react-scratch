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
