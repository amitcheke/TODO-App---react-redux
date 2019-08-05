import axios from 'axios';

export const  getTodos = async () =>{
    var result  = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return result;
}

export const deleteToDo = async (id) =>{
    var result = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return result;
}