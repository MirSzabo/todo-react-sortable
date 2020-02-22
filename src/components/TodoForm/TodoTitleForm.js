import React from "react";

export default function TodoTitleForm({ value, setValue }) {

   return (
    <div>
        Todo description
        <input
            value={value}
            onChange={event => setValue(event.target.value)}
            type="text"
        ></input>
    </div>
  );
}
