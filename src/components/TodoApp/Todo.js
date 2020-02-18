import React, { useState } from "react";
import TodoTitleForm from "../TodoForm/TodoTitleForm";
import { sortableElement } from "react-sortable-hoc";

function Todo({
    id,
    description,
    deadline,
    completed,
    removeTodo,
    editTodo,
    toggleTodo
  }) {
    const [state, editState] = useState(false);
    const [value, setValue] = useState(description);
  
    const toggleEditState = () => editState(prev => !prev);
    const update = () => 
    {
      editTodo(id, value)
      toggleEditState();
    } 

    const editFormShow = () => {
      return (
        <> 
          <TodoTitleForm
            value={value}
            setValue={setValue}
          />
          <button onClick={update}>Update</button>
        </>
      )
    }
  
    const editFormHide = () => {
      return (
      <div>
        {description} {deadline}
        <input
          type="checkbox"
          name="completed"
          value={completed}
          onChange={() => toggleTodo(id)}
        />
        <button onClick={() => removeTodo(id)}>Delete</button>
        <button onClick={toggleEditState}>Edit</button>
      </div>)
    }
  
    return (
      <li style={{ textDecoration: completed ? "Line-through" : "none" }}>
        {state ? editFormShow() : editFormHide() }
      </li>
    );
  }

  export default sortableElement(Todo);