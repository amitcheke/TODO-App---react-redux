import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';
import * as apiStore from '../APIs/APIStore.js';

const todoContainerStyle = {
    listStyle : 'none',
    margin:'20px'
}

const todoStyle = {
    padding: '10px',
    border: '1px solid gray',
    border: '1px solid gray',
    borderRadius: '5px',
    margin: '5px'
}
class Todos extends React.Component{
    constructor(props){
        super(props);
        this.deleteToDo = this.deleteToDo.bind(this);
        // this.editTodo = this.editTodo.bind(this)
    }
    deleteToDo(id){
       // this.showLoader();
        apiStore.deleteToDo(id)
        .then(res => this.props.deleteTodo(id))
    }

    render(){
        const {todos} = this.props;
        return(
            <div>
            {todos.map((todo) => {
                return (
                <p key={todo.id} style={todoStyle}>    
                { (this.props.editId == todo.id) ? <span><form style={{display:'inline'}}><input type="text" value={todo.title} ref="inputField" style={{width: '300px',padding: '5px'}}></input></form></span> : <span>{todo.title}</span>} 
                {/* <button onClick = {this.editTodo.bind(this, todo.id)} style={{float:'right'}}>
                    Edit
                </button> */}
                <button onClick = {this.deleteToDo.bind(this, todo.id)} style={{float:'right'}}>
                    Delete
                </button>
                </p>)
            })}
           </div>
        );
    }
}  

const mapStateToProps = (state) =>{
    return {
        todos:state.todoApp.toDos, 
        editId:state.todoApp.editId
    }
}

export default connect(mapStateToProps,{deleteTodo}) (Todos);