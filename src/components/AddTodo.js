import React from 'react';
import * as apiStore from '../APIs/APIStore.js';
import { connect } from 'react-redux';
import { createToDo } from '../actions/';

class AddTodo extends React.Component{
    state = {
        title: ""
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.createToDo(this.state.title);
        this.setState({
            title:""
        })
    }
    onChange(e){
        this.setState({
            title: e.target.value
        })
    }
    render(){
        return(
        <form style={{display:'flex', justifyContent:'center', padding:'40px'}} onSubmit={this.submitForm}> 
            <input type="text" style={{flex:10, padding:'5px'}} value={this.state.title} onChange={this.onChange.bind(this)}></input>
            <input type="submit" style={{flex:1}} value="Add"></input>
        </form>);
    }
}
export default connect(null, { createToDo }) (AddTodo);