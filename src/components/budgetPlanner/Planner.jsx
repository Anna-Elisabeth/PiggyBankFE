import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import Budget from "./Budget";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";
import RemainingBudget from "./Remaining";



function Planner() {
  // Define styles for the pig/pink theme
  const styles = {
    container: {
      backgroundColor: "#FFD1DC", // Light pink background
      padding: "20px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    },
    title: {
      color: "#FF69B4", // Hot pink text
    },
  };

  return (
    <div>
    <AppProvider>
      <div style={styles.container}>
        <h1 className="mt-3" style={styles.title}>
          My Budget Planner
        </h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3" style={styles.title}>
          Expenses
        </h3>
        <div className="row">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3" style={styles.title}>
          Add Expense
        </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
        <br></br>
        <a href="http://localhost:3000/mycalendar" style={{fontSize:"30px", color:"rgba(255, 20, 147"}}><strong><i>If you have ham-nesia, be sure to add your payments to our ham-dy calendar by clicking here</i></strong></a>
      </div>
    </AppProvider>

   
   



    </div>
  );
}

export default Planner;