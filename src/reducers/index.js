import {combineReducers} from 'redux';

const initialState = {
    toDos : [],
    loading: true,
    editId: '0'
}

export const todoAppReducer = (state = initialState, action) => {
    switch(action.type){
        case 'DELETE_TODO':
            return Object.assign({}, state, { toDos: [...state.toDos.filter(todo => todo.id != action.payload)], loading: false});
        
        case 'FETCHED_TODOS_SUCCESSFULLY': 
            return Object.assign({},state, {toDos:action.payload});
        
        case 'TODO_ADDED':
            return {...state, toDos:[...state.toDos, action.payload]};

        default:
            return state;    
    }
}

export default combineReducers({
    todoApp : todoAppReducer
})