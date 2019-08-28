import React from 'react';
import ReactDOM from 'react-dom';
import  {Todo}     from './Todo.js'

export class TodoList extends React.Component {
    constructor(props) {
        super(props);   
           
    }
    render() {        
        const listItems = this.props.todoList.map( (Obj,i) =>       
            <Todo key={"Todolist_"+i} text={Obj.text} priority={Obj.priority} dueDate={Obj.dueDate} />
        );
        return (
            <ul>{listItems}</ul>
        );

    }
}