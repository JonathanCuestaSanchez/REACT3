import React, { Component } from 'react';
import './App.css';
import { Login } from './component/Login';
import  Main  from './component/Main';
import  TodoApp from './TodoApp';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('isLogged',false);
    localStorage.setItem('email',"prueba@mail.com");
    localStorage.setItem('password',"1234");
    localStorage.setItem('task',JSON.stringify([{"title":"implement Login","description": "some description text ",
    "responsible": {"name": "Santiago Carrillo","email": "sancarbar@gmail"},"status": "ready","dueDate": 156464645646}]));
  }

  render() {
    const LoginView = () => (
      <Login />
    );

    const TodoAppView = () => (
      <TodoApp />
    );
    
    const MainView = () => (
      <Main />
    );
    return (
      <Router>
        <div className="App">         
          <div>
            <Route exact path="/" component={LoginView} />
            <Route  exact  path="/todo" component={TodoAppView} />
            <Route  exact  path="/main" component={MainView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;