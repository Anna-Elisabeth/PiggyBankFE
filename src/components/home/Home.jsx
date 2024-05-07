import React, { useState } from "react";
import axios from 'axios';

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8070/customer/get?username=${username}`);

      if (response.data.password === password) {
        alert('Login successful');
      } else {
        alert('Login unsuccessful');
      }
    } catch (error) {
      console.error(error);
      alert('Login unsuccessful');
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "85vh",
      backgroundColor: "#FFD1DC", // Light pink background
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "300px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#FFB6C1", // Slightly darker pink for the form
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #FF69B4", // Hot pink border
    },
    button: {
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#FF69B4", // Hot pink background
      color: "white",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Home;