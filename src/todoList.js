import React, { Component } from 'react'
import './todoList.css'
import ToDo from './todo'
import ToDoForm from './todoForm'

class ToDoList extends Component {
  render() {
    return (
      <div className="ToDoList">
          <h1>To-Do List</h1>
        <div className="ToDoList-grid">
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDoForm />
        </div>
      </div>
    )
  }
}

export default ToDoList
