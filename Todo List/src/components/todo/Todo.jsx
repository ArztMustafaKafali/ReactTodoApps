import { Button } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextInput from "../toolBox/TextInput";
import { addTodo } from "./todoSlicer";

const Todo = () => {
  const [todo, setTodo] = useState();
  const [errors, setErrors] = useState()
  const dispatch = useDispatch();

  const handleChange = (e) => {

    setTodo(e.target.value);
    if(e.target.value === ""){
      setErrors("lütfen bir todo giriniz...")
    }
    else{
      setErrors("")
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newTodo = {
      id : Math.floor(Math.random()*400000),
      todo,
      isCompleted : false
    }
    dispatch(addTodo(newTodo));
    setTodo(" ")
  };

  return (
    <form onSubmit={handleSave}>
      <h3>Todo</h3>
      <div className="form-group col-md-6">
        <TextInput
          name="todo"
          label="Todo"
          value={todo}
          onChange={handleChange}
          error={errors}
          placeholder = "lütfen bir todo giriniz"
        ></TextInput>
      </div>
      <hr></hr>
      <Button color="success">Todo Ekle</Button>
    </form>
  );
};

export default Todo;
