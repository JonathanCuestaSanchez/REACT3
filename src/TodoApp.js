import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Menu from "./component/Menu";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items:  JSON.parse(localStorage.getItem('task')), title: '',description:"", status:"a", responsible: '', dueDate: '', menu: '' };
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
    console.log( this.state.status)
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
      state: this.state.status,
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
    localStorage.setItem("task",JSON.stringify(this.state.items));
    
    
  }
  render() {
    const divStyle = {      
      minWidth: 250,   
     
    }; 
    const divbody = {      
      padding:0,
      marginTop:"100px"    
     
    }; 
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
            <FormControl style={divStyle}>
              <InputLabel htmlFor="age-simple">State</InputLabel>     
              <Select              
                value={this.state.status}
                onChange={this.handleStatusChange}
                inputProps={{                  
                  id: 'age-simple',
                }}
              >               
              <MenuItem value={"Completed"}>Completed</MenuItem>
              <MenuItem value={"In Progress"}>In Progress</MenuItem>
              <MenuItem value={"Ready"}>Ready</MenuItem>
            </Select>
            </FormControl>
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