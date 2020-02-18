import React from "react";

export default function TodoTitleForm({ value, setValue }) {

    function submit (e) {
        e.preventDefault();
        setValue("");
    }

   return (
    <form onSubmit={submit}>
        <div>
            Todo description
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
                type="text"
            ></input>
        </div>
    </form>
  );
}
