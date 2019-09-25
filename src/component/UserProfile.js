
import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
export class Cards extends Component {
    constructor(props) {
        super(props);   
        this.state={name:"",email:localStorage.getItem("email"),password:"",secondPassword:"",confim:false}          
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        });
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
    handleRepiPassword(e) {
        this.setState({
            secondPassword: e.target.value
        });
    }
    render() {
        const divStyle = {
            withd:"100px"    
        }; 

        return (
            <div>
                <AccountBoxIcon style={divStyle}/>
                <div>
                <TextField
            style={divStyle}
              value={this.state.name}
              id="texto"              
              type="text"
              label="Name"
              onChange={this.handleName}       
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
            style={divStyle}
              value={this.state.email}
              id="texto"              
              type="text"
              label="Email"
              onChange={this.handleEmail}       
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
            style={divStyle}
              value={this.state.password}
              id="texto"              
              type="password"
              label="Title"
              onChange={this.handlePassword}       
              InputLabelProps={{
                shrink: true,
              }}
            />
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
                    
                </div>
            </div>

        );
    }

}
