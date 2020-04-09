import React, { Component } from 'react'
import './todo.css'

class ToDo extends Component {
  render() {
    return (
      <div className="ToDo">
        <div className="todoText">
          <p>feed my dog</p>
        </div>
        <div className="edit">
          <i class="fas fa-pen"></i>
        </div>
        <div className="edit">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    )
  }
}

export default ToDo
