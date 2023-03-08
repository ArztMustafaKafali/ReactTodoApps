import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import {removeAllTodos } from "../todo/todoSlicer";
import alertify from "alertifyjs";
import Todos from "./Todos";
const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch()

  const removeAllTodoss = ()=>{
    dispatch(removeAllTodos())
    alertify.error("Tüm Todolar Silindi")
  }

  return (
    <div className="col-md-6">
      <div>
        <ListGroup>
          {todos.map((todo, i) => {
            return (
              <Todos key={i} todo={todo} ></Todos>

            );
          })}
        </ListGroup>
        <hr></hr>
        <Button onClick={()=>removeAllTodoss()} color="danger">Hepsini Sil</Button>
      </div>
    </div>
  );
};

export default TodoList;
