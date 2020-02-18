import React, { useState } from "react";
import TodoDeadlineForm from "./TodoDeadlineForm"
import TodoTitleForm from "./TodoTitleForm"
import formatDate from "./helpers/formatDate.js"

function TodoForm({ addTodo }) {

  const [value, setValue] = useState(""); 
  const [deadline, setDeadline] = useState("");

  const add = () => {
    setValue("");
    setDeadline("");
    addTodo(value, formatDate(deadline))
  }

  return (
    <div>
      <TodoTitleForm value={value} setValue={setValue}/>
      <TodoDeadlineForm deadline={deadline} setDeadline={setDeadline}/>
      <button onClick={add }>Add todo</button>
    </div>
  );
}

export default TodoForm;