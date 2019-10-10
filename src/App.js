import React, { Component } from 'react';
import './App.css';
import { Login } from './component/Login';
import  Main  from './component/Main';
import  {UserProfile}  from './component/UserProfile';
import  TodoApp from './TodoApp';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('name',"");
    localStorage.setItem('isLogged',false);
    localStorage.setItem('email',"prueba@mail.com");
    localStorage.setItem('password',"1234");
    localStorage.setItem('task',JSON.stringify([{"title":"implement Login","description": "some description text ",
    "responsible": {"name": "Santiago Carrillo","email": "sancarbar@gmail"},"status": "Ready","dueDate": 156464645646}]));
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
    const UserProfileView = () => (
      <UserProfile />
    );
    return (
      <Router>
        <div className="App">         
          <div>
            <Route exact path="/" component={LoginView} />
            <Route  exact  path="/todo" component={TodoAppView} />
            <Route  exact  path="/main" component={MainView} />
            <Route  exact  path="/profile" component={UserProfileView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;