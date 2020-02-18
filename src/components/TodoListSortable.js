import React from "react";
import { sortableContainer } from "react-sortable-hoc";

const TodoListSortable = sortableContainer(({ children }) => (
  <div>{children}</div>
));

export default TodoListSortable;
