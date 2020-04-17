import React, { Component } from 'react'
import './todoList.css'
import ToDo from './todo'
import ToDoForm from './todoForm'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems:
        JSON.parse(window.localStorage.getItem('ToDoItemsList')).length !== 0
          ? JSON.parse(window.localStorage.getItem('ToDoItemsList'))
          : [],
    }
  }

  addToList(inputValueObject) {
    let newArray = [...this.state.todoItems, inputValueObject]
    this.setState(
      {
        todoItems: newArray,
      },
      window.localStorage.setItem('ToDoItemsList', JSON.stringify(newArray))
    )
  }

  handleDelete(id) {
    this.setState((preState) => {
      return {
        todoItems: preState.todoItems.filter((item) => {
          return item.id !== id
        }),
      }
    })
  }
  handleEdit(id, editedText) {
    let newEditedArray = this.state.todoItems.map((item) => {
      if (item.id === id) {
        item.task = editedText
      }
      return item
    })
    this.setState(
      {
        todoItems: newEditedArray,
      },
      window.localStorage.setItem(
        'ToDoItemsList',
        JSON.stringify(newEditedArray)
      )
    )
  }

  render() {
    const items = this.state.todoItems.map((todo) => {
      return (
        <ToDo
          text={todo.task}
          key={todo.id}
          handleEdit={this.handleEdit.bind(this, todo.id)}
          handleDelete={this.handleDelete.bind(this, todo.id)}
        />
      )
    })
    return (
      <div className="ToDoList">
        <h1>To-Do List</h1>
        <div className="ToDoList-grid">
          {items}
          <ToDoForm handleFormSubmit={this.addToList.bind(this)} />
        </div>
      </div>
    )
  }
}

export default ToDoList
