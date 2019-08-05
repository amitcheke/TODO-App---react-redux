import React from 'react';
import './App.css';
import Header from './components/Header.js';
import * as apiStore from './APIs/APIStore.js';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import PropTypes from 'prop-types';
import LoadingSpinner from './components/LoadingSpinner.js';
import { connect } from 'react-redux';
import { getToDoList } from './actions'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    apiStore.getTodos()
    .then((response) => {
      this.props.getToDoList(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  showLoader(){
    this.setState({
      loading: true
    })
  }
  editTodo(id){
    this.setState({
     editId: id
    })
  }

  render(){
    return (<div> 
      <Header/> 
      <AddTodo/>
      {/* {this.state.loading ? <LoadingSpinner /> : <></>} */}
      <Todos/>
    </div>)
  }
}
export default  connect(null,{getToDoList}) (App);
