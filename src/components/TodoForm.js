import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    // Add the custom function to the react component
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todoInput = this.refs.todoInput;
    // Get the value from the input
    let todoItemValue = todoInput.value;
    // Add the value to the state of todo list component
    this.props.addItem(todoItemValue);
    // Reset form and autofocus the input
    this.refs.itemForm.reset();
    todoInput.focus();
  }

  render() {
    return (
      <div>
        <form ref='itemForm' onSubmit={ this.handleSubmit }>
          <input ref='todoInput' type='text' placeholder='Get Milk' required />
          <input type='submit' />
        </form>
      </div>
    );
  }

}

export default TodoForm;
