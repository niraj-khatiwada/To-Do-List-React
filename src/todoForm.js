import React, { Component } from 'react'
import './todoForm.css'

class TodoForm extends Component {
  render() {
    return (
      <form className="ToDoForm">
        <label htmlFor="todoInput">New To-Do </label>
        <input className="formInput"
          name="todoInput"
          placeholder="What do you want to do today?"
          value=""
        />
      </form>
    )
  }
}

export default TodoForm
