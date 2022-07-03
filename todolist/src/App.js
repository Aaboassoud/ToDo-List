import './App.css';
import './bootstrap.css'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    Task: [],
    value: "",
  };
  change = (item) => {
    this.setState({ value: item.target.value });
  };

  addTask = () => {
    const obj = {
      name: this.state.value
    };
    if (this.state.value !== "") {
      document.getElementById("1").value = null 
      this.setState({Task:this.state.Task.concat(obj),value:""});
      
    }
  };
  
  render() {
    const toDoList = this.state.Task.map((todo) => (
      <li className="todo_item">{todo.name}</li>
    ));
    return (
      <div className="App">
      <header className="App-header">
      <h1 className='text-warning'>ToDo List</h1>
      <div className='container'>
          <input placeholder="What to do ?" type="text" onChange={this.change} id="1" className='m-5 rounded bg-dark text-info'/>
          <button className='btn btn-success' onClick={this.addTask}>Add Task</button>
      </div>
          <ul className='text-info'>{toDoList}</ul>
      </header>
    </div>
    )
  }
}