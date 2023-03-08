import { useDispatch, useSelector } from "react-redux";
import { ListGroupItem } from "reactstrap";
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { removeTodo, completedTodo, addEditTodo } from "../todo/todoSlicer";
import alertify from "alertifyjs";
import { useState } from "react";
import clsx from "clsx";
import TextInput from "../toolBox/TextInput";

const Todos = ({ todo }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState();

  const removeTodos = (todo) => {
    dispatch(removeTodo(todo));
    alertify.error(todo.todo + " Silindi");
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const handleSave = (e)=>{
    const newTodo = {
      id : todo.id,
      todo : content,
      isCompleted : true
    }
    dispatch(addEditTodo(newTodo))
    setEditable(false)
  }
  const todoStyle = clsx({
    ["todo-row"]: true,
    ["completed"]: todo.isCompleted,
  });
  console.log(todo);
  return (
    <div className={ editable ===false ?  todoStyle : "todo-row"}>
      <div onClick={() => dispatch(completedTodo(todo.id))}>
        {editable ? (
          <TextInput
            name="todoEdit"
            label="Todo"
            value={content}
            onChange={handleChange}
          ></TextInput>
        ) : (
          todo.todo
        )}
      </div>
      <div>
        {editable ===false ? (
          <div>
            <GrFormClose
              className="todo-icon"
              onClick={() => removeTodos(todo)}
            />
            <GrFormEdit
              className="todo-icon"
              onClick={() => setEditable(true)}
            />
          </div>
        ) : (
          <div>
            <GrFormCheckmark onClick={handleSave} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Todos;
