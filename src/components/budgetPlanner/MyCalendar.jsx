import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({});

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    // Do something with the selected date
  };

  const handleNoteChange = (note) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [date.toDateString()]: note,
    }));
  };

  return (
    <div className="container-calendar d-flex flex-column align-items-center justify-content-start vh-100">
      <div className="w-100 text-center">
        <h5 className="mb-3">
          If you have Ham-nesia, be sure to add your upcoming payments to our ham-dy
          calendar by selecting a date.
        </h5>
      </div>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileContent={({ date, view }) => {
          if (view === "month" && notes[date.toDateString()]) {
            return <div className="noteCircle"></div>;
          }
        }}
      />
      <div className="noteInputContainer mt-3">
        <div className="row">
          <div className="col-12">
            <h5>Add Ham-dy note here:</h5>
          </div>
          <div className="col-12">
            <input
              className="inputStyle"
              type="text"
              placeholder="Enter note for this date"
              value={notes[date.toDateString()] || ""}
              onChange={(e) => handleNoteChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
