import React from 'react';
import {Cards} from "./Cards";
import Menu from "./Menu.js";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Redirect } from "react-router-dom";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: JSON.parse(localStorage.getItem('task')), menu: '', Add:false };
    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }   
  handleMenuChange(e) {
    if (this.state.menu) {
      this.setState({ menu: false });
    } else {
      this.setState({ menu: true });
    }
  }  
  handleAdd(e) {    
    this.setState({ Add: true });   
  }  
 
  render() { 
    const divStyle = {      
        padding:0,
        marginTop:"100px"       
    };  
    
    const Buttonstyle = {         
        position: "fixed",
        bottom: "30px",
        right:"30px"  
    };     
    const listItems = this.state.items.map( (Obj,i) =>       
    <Cards key={"item"+i} title={Obj.title} description={Obj.description} responsible={Obj.responsible} status={Obj.status} dueDate={Obj.dueDate}/>
    );   
    if(this.state.Add==true){             
        return <Redirect to={{
            pathname: '/todo',
        }}
        />
    }
    return (
        <div>
            <Menu />
            <ul style={divStyle}>{listItems}</ul>            
                <Fab color="secondary" aria-label="add" style={Buttonstyle} onClick={this.handleAdd} >
                <AddIcon/></Fab>           

        </div>
        
    );
  }
}

export default Main;