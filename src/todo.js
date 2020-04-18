import React, { Component } from 'react'
import './todo.css'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editToggle: false,
      instance: '',
      checked: false,
    }
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleEditChange = this.handleEditChange.bind(this)
    this.handleCheckClick = this.handleCheckClick.bind(this)
  }
  componentDidUpdate(preProps, prevState) {
    console.log('COmponent Updated')
    console.log('Previous Prop', preProps)
    console.log('Previous State', prevState)
  }
  handleEditClick() {
    this.setState({ editToggle: true, instance: this.props.text })
  }
  handleDeleteClick() {
    this.props.handleDelete()
  }
  handleEditSubmit(evt) {
    evt.preventDefault()
    this.props.handleEdit(this.state.instance)
    this.setState({ editToggle: false, instance: '' })
  }
  handleEditChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleCheckClick() {
    this.setState({ checked: this.state.checked === false ? true : false })
  }
  render() {
    return this.state.editToggle === true ? (
      <div className="ToDo">
        <form onSubmit={this.handleEditSubmit}>
          <input
            type="text"
            name="instance"
            className="editInput"
            value={this.state.instance}
            onChange={this.handleEditChange}
          />
          <button className="saveButton" onClick={this.handleEditSubmit}>
            Save
          </button>
        </form>
      </div>
    ) : (
      <div className="ToDo">
        <div className={`todoText ${this.state.checked}`}>
          <i className="fas fa-check" onClick={this.handleCheckClick}></i>
          <p onClick={this.handleCheckClick}>{this.props.text}</p>
        </div>
        <div className="edit">
          <i className="fas fa-pen" onClick={this.handleEditClick}></i>
        </div>
        <div className="delete">
          <i className="fas fa-trash" onClick={this.handleDeleteClick}></i>
        </div>
      </div>
    )
  }
}

export default ToDo
