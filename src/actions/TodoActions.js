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

    console.log('fetch started')
    dispatcher.dispatch({type: 'FETCH_TODOS_START'})
    setTimeout(() => {
        //todo get from local storage
        const todos = [{
            id: 5,
            title: 'loaded test',
            complete: false,
        }];
        console.log('fetch ended');
        dispatcher.dispatch({type: 'FETCH_TODOS_END', todos})
    }, 1000);
}
