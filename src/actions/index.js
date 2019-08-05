import axios from 'axios';

export const deleteTodo = (id)=>{
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

export const getToDoList = (todos) => {
    return {
        type:"FETCHED_TODOS_SUCCESSFULLY",
        payload: todos
    }
}

export const createToDo = (title) => {
    return async function(dispatch){
        var result = await axios.post('https://jsonplaceholder.typicode.com/todos',
        {
            title: title,
            completed: false
        });
        dispatch({type:"TODO_ADDED", payload: result.data});
    
    }
}