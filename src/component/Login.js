import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { Redirect } from "react-router-dom";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password:"",isLogged: JSON.parse(localStorage.getItem("isLogged")) };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);  
      
    }

    render() {
        if(this.state.isLogged===true){             
            return <Redirect to={{
                pathname: '/main',
            }}
            />
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <AccountCircleIcon />
                        </Avatar>
                        <Typography variant="headline">Task Planner</Typography>
                        <form className="form" onSubmit={this.handleLogin}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email"
                                    onChange={this.handleEmail}
                                    value={this.state.email}
                                    autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePassword}
                                    value={this.state.password}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleLogin(e) {        
        e.preventDefault();  
            localStorage.setItem("email", this.state.email); 
     
            localStorage.setItem("isLogged", 'true');   
            this.setState({isLogged: true});         
       
    }


}
export default Login;