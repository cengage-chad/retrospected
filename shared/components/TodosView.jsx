import React from 'react';
import * as TodoActions from '../actions/TodoActions';

export default class TodosView extends React.Component {

  handleDelete = (event) => {
    const id = Number(event.target.dataset.id);
    
    // Equivalent to `dispatch(deleteTodo())`
    this.props.deleteTodo(id);
  }
  
  handleEdit = (event) => {
    const id  = Number(event.target.dataset.id);
    const val = this.props.todos.get(id).text
    
    // For cutting edge UX
    let newVal = window.prompt('', val);
    this.props.editTodo(id, newVal);
  }
 
  render() {
    return (
      <div id="todo-list">
      </div>
    );
  }
}