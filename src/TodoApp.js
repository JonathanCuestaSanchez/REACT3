import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Menu from "./component/Menu";
import MenuItem from '@material-ui/core/MenuItem';


import { Redirect } from "react-router-dom";
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items:  JSON.parse(localStorage.getItem('task')), title: '',description:"", status:"a", responsible: '', dueDate: '', menu: '', back: false};
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleResponsibleChange = this.handleResponsibleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }  
  handleStatusChange(e) {     
    this.setState({ status: e.target.value });    
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleMenuChange(e) {
    if (this.state.menu) {
      this.setState({ menu: false });
    } else {
      this.setState({ menu: true });
    }
  }
  handleResponsibleChange(e) {
    this.setState({ responsible: e.target.value });
  }
  handleDateChange(e) {
    this.setState({ dueDate: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.title.length ||!this.state.description.length || !this.state.responsible.length || !this.state.status.length || !this.state.dueDate) {
      return;
    }    
    const newItem = {
      title: this.state.title,
      description: this.state.description,
      responsible:{name:this.state.responsible} ,
      status: this.state.status,
      dueDate: this.state.dueDate,
    };
    
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      title:"",
      description: "",
      responsible: "",
      status:"",
      dueDate: "",      
    }));
    this.setState({ back: true });
    
    
    
  }
  render() {
    if(this.state.back){
      localStorage.setItem("task",JSON.stringify(this.state.items));
      return <Redirect to={{
        pathname: '/main',
       }}
       />
    }
    const divStyle = {      
      minWidth: 250,   
     
    }; 
    const divbody = {      
      padding:0,
      marginTop:"100px"    
     
    };
    const estados = [
      { status: "Completed" }, { status: "In Progess" }, { status: "Ready" }
    ] 
    return (
      <div>
        <Menu/>
        <div style={divbody}>          
          <h2>Add Task</h2>
          <form>
          <TextField
            style={divStyle}
              value={this.state.title}
              id="texto"              
              type="text"
              label="Title"
              onChange={this.handleTitleChange}       
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br/>
            <br/>
            <TextField
              value={this.state.description}
              style={divStyle}
              id="description"              
              type="text"
              label="Description"
              onChange={this.handleDescriptionChange}        
              InputLabelProps={{
                shrink: true,
              }}
            />      
            <br/>
            <br/>
            <TextField
              value={this.state.responsible}
              style={divStyle}
              id="responsible"              
              type="text"
              label="Responsible"
              onChange={this.handleResponsibleChange}        
              InputLabelProps={{
                shrink: true,
              }}
            />      
                         
            <br/>
            <br/> 
            <TextField
                  style={divStyle}
                  id="priority-todo"
                  select
                  label="Seleccione"
                  value={this.state.status}
                  onChange={this.handleStatusChange}
                  helperText="Por favor seleccione el estado"
                  margin="normal"
                >
                  {estados.map(option => (
                    <MenuItem key={option.status} value={option.status}>
                      {option.status}
                    </MenuItem>
                  ))}
                </TextField>
            <br/>
            <br/>
            <TextField
              value={this.state.dueDate}
              style={divStyle}
              id="date"              
              type="date"
              label="DueDate"
              onChange={this.handleDateChange}           
              InputLabelProps={{
                shrink: true,
              }}
            />            
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
              Add
            </Button>
          </form>         
        </div>        
      </div>    
    );
  }
}

export default TodoApp;