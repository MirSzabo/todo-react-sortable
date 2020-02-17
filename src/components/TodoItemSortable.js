import React from "react";
import Todo from "./Todo";
import { sortableElement } from "react-sortable-hoc";

const TodoItemSortable = sortableElement(
  ({ id,
    i,
    description,
    deadline,
    completed,
    removeTodo,
    editTodo,
    toggleTodo
  }) => (
    <Todo index={i} id={id} description={description} deadline={deadline} completed={completed} removeTodo={removeTodo} editTodo={editTodo} toggleTodo={toggleTodo}/>
  )
);

export default TodoItemSortable;