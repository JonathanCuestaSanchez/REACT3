import React, { Component } from 'react';
import './App.css';
import { Login } from './component/Login';
import  Main  from './component/Main';
import  CreateAccount  from './component/CreateAccount';
import  {UserProfile}  from './component/UserProfile';
import  TodoApp from './TodoApp';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);  
    localStorage.setItem('isLogged',false);
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
            <Route  exact  path="/Createaccount" component={CreateAccount} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;