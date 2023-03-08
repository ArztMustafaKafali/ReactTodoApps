import React from 'react'
import {Row } from 'reactstrap'
import Todo from "../todo/Todo"
import TodoList from "../todoList/TodoList"

const Dashboard = () => {
  return (
    <div>
        <Row>
            <Todo></Todo>
            <TodoList></TodoList>
        </Row>
      
    </div>
  )
}

export default Dashboard
