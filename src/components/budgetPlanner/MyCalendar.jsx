import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyles.css";

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
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileContent={({ date, view }) => {
          if (view === "month" && notes[date.toDateString()]) {
            return (
              <div
                style={{
                  backgroundColor: "#000",
                  borderRadius: "50%",
                  height: "10px",
                  width: "10px",
                  margin: "auto",
                }}
              ></div>
            );
          }
        }}
      />
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="row">
          <div className="col-12">
            <h6>A note for your calendar:</h6>
          </div>
          <div className="col-12">
            <input
              style={{
                fontSize: "15px",
                padding: "10px",
                borderWidth: "1px",
                borderColor: "#ccc",
                backgroundColor: "#f6ebee",
                borderRadius: "10px",
              }}
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
