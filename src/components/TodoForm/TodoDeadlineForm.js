import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TodoDeadlineForm({ deadline, setDeadline }) {

  return (
    <div>
       Deadline
      <DatePicker
        selected={deadline}
        minDate={new Date()}
        onChange={e => setDeadline(e)}
      />
    </div>
  );
}
