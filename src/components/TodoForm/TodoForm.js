import React, { useState } from "react";
import TodoDeadlineForm from "./TodoDeadlineForm"
import TodoTitleForm from "./TodoTitleForm"
import formatDate from "./helpers/formatDate.js"

function TodoForm({ addTodo }) {

  const [value, setValue] = useState(""); 
  const [deadline, setDeadline] = useState("");

  const add = (e) => {
    e.preventDefault();
    setValue("");
    setDeadline("");
    addTodo(value, formatDate(deadline))
  }

  return (
    <form onSubmit={add}>
      <TodoTitleForm value={value} setValue={setValue}/>
      <TodoDeadlineForm deadline={deadline} setDeadline={setDeadline}/>
      <input type="submit" value="Add Todo" />
    </form>
  );
}

export default TodoForm;