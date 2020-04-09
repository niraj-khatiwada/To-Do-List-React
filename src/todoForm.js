import React, { Component } from 'react'
import './todoForm.css'
import { v4 as uuid } from 'uuid'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: { task: '', id: '' },
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleFormSubmit(evt) {
    evt.preventDefault()
    this.props.handleFormSubmit(this.state.todoInput)
    this.setState({ todoInput: { task: '' } })
  }
  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: { task: evt.target.value, id: uuid() },
    })
  }
  render() {
    return (
      <form className="ToDoForm" onSubmit={this.handleFormSubmit}>
        <label htmlFor="todoInput">New To-Do </label>
        <input
          className="formInput"
          name="todoInput"
          placeholder="What do you want to do today?"
          value={this.state.todoInput.task}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

export default TodoForm
