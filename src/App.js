import React, { Component } from 'react';
import './App.css';
import { Login } from './component/Login';
import  TodoApp from './TodoApp';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('isLoggedin',false);
    localStorage.setItem('email',"prueba@mail.com");
    localStorage.setItem('password',"1234");
  }

  render() {
    const LoginView = () => (
      <Login />
    );

    const TodoAppView = () => (
      <TodoApp />
    );
    
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>

          <div>
            <Route exact path="/" component={LoginView} />
            <Route  exact  path="/todo" component={TodoAppView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;