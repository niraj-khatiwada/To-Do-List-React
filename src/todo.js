import React, { Component } from 'react'
import './todo.css'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }
  handleEditClick() {
    this.props.handleEdit()
  }
  handleDeleteClick() {
    this.props.handleDelete()
  }
  render() {
    return (
      <div className="ToDo">
        <div className="todoText">
          <p>{this.props.text}</p>
        </div>
        <div className="edit">
          <i className="fas fa-pen" onClick={this.handleEditClick}></i>
        </div>
        <div className="edit">
          <i className="fas fa-trash" onClick={this.handleDeleteClick}></i>
        </div>
      </div>
    )
  }
}

export default ToDo
