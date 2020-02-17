import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
  const [deadline, setDeadline] = useState(new Date());
  return <DatePicker selected={deadline} onChange={date =>
    setDeadline(date)} minDate={new Date()}/>
};

export default DatePick;