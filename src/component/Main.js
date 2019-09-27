import React from 'react';
import {Cards} from "./Cards";
import Menu from "./Menu.js";
import FilterListIcon from '@material-ui/icons/FilterList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Redirect } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: JSON.parse(localStorage.getItem('task')), menu: '', Add:false,  modalOpen:false };
    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }   
  handleModal(e) {    
    if (this.state.modalOpen) {
      this.setState({ modalOpen: false });
    } else {
      this.setState({ modalOpen: true });
    } 
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
    const fistyle = {         
      position: "absolute",
      top: "40px",
      right:"30px"  
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
    const modalStyle= {
      position: 'relative',
      width: 400,
      backgroundColor: "white",   

      
    };
    return (
        <div>
            <Menu />
            <FilterListIcon style={fistyle} onClick={this.handleModal}></FilterListIcon>
            <ul style={divStyle}>{listItems}</ul>            
            <Fab color="secondary" aria-label="add" style={Buttonstyle} onClick={this.handleAdd} >
            <AddIcon/></Fab>   
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.modalOpen}
              onClose={this.handleModal}
            >
              <div style={modalStyle}>
                <h2 id="simple-modal-title">Filters</h2>
                <p id="simple-modal-description">
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p>
                
              </div>
            </Modal> 
                   

        </div>
        
    );
  }
}

export default Main;