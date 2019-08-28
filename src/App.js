import React from 'react';
import logo from './logo.svg';
import'./App.css';
import { TodoList } from './TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: '', priority: '', dueDate: ''  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  setStates(element){    
    
    var keys=Object.keys(element);     
    if(keys[0]=="text"){
      this.state.text=element.text;
    }  
    if(keys[0]=="priority"){
      this.state.priority=element.priority;
    } 
    if(keys[0]=="dueDate"){
      this.state.dueDate=element.dueDate;
    }   
    console.log(this.state)

    
  }
  handleChange(e) {
    console.log(this.state.items)
        
    this.setStates({ text: e.target.value });
  } 
  handlePriorityChange(e) {
    this.setStates({ priority: e.target.value });
  }
  handleDateChange(e) {
    this.setStates({ dueDate: e.target.value });
  }
  
  handleSubmit(e) {
    
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    if (!this.state.priority) {
      return;
    }
    if (!this.state.dueDate) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate,      
    };
    console.log(this.state.dueDate)
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
     
    }));
  }
  render() {   
    
 
    return (
      <div>

      <div>
        <h2>TodoList</h2>        
        <form onSubmit={this.handleSubmit}>
          <input
            id="texto"
            type="text"
            placeholder="text"
            onChange={this.handleChange}
           
          /><br />
          <br />
          <input
            id="priority"
            type="number"
            placeholder="Priority"
            onChange={this.handlePriorityChange}
           
          /><br />
          <br />
          <input
            id="date"
            type="date"
            placeholder="Date(dd/mm/aa)"
            onChange={this.handleDateChange}
           
          /><br />
          <br />
          <button onClick={this.handleSubmit}>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
      <h1>TAREAS</h1>
      <TodoList todoList={this.state.items} />
    </div>
    );
  }
}

export default TodoApp;