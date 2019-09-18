import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import { TodoList } from './TodoList';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Face from '@material-ui/icons/Face';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: '', dueDate: '', menu: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }
  setStates(element) {

    var keys = Object.keys(element);
    if (keys[0] === "text") {
      this.state.text = element.text;
    }
    if (keys[0] === "priority") {
      this.state.priority = element.priority;
    }
    if (keys[0] === "dueDate") {
      this.state.dueDate = element.dueDate;
    }
    console.log(this.state)


  }
  handleChange(e) {
    console.log(this.state.items)

    this.setState({ text: e.target.value });
  }
  handleMenuChange(e) {

    if (this.state.menu) {
      this.setState({ menu: false });
    } else {
      this.setState({ menu: true });
    }

  }
  handlePriorityChange(e) {
    this.setState({ priority: e.target.value });
  }
  handleDateChange(e) {
    this.setState({ dueDate: e.target.value });
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
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),

    }));
  }
  render() {
    const divStyle = {
      position: 'absolute',
      height: "25px",
      width: "25px",
      background: "green",
      borderRadius: "50%",
      rigth:"10%",
      bottom:"5%"
      };


    return (
      <div>

        <div>

          <div>
            <div>
              <IconButton className="btn" aria-label="Menu" onClick={this.handleMenuChange}>
                <Menu></Menu>
              </IconButton>
            </div>
            <Drawer open={this.state.menu}>
              <div
                role="presentation"
              ></div>
              <List>
                <ListItem key='User'>
                  <ListItemIcon><Face></Face></ListItemIcon>
                  <ListItemText primary={localStorage.getItem('email')} />
                </ListItem>

              </List>
              <Divider />
              <Button variant="contained" color="secondary" onClick={this.handleMenuChange}>
                LOG OUT
              </Button>
            </Drawer>
          </div>

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
            <button style={this.divStyle} onClick={this.handleSubmit}>
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