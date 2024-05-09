import React, { useState } from "react";
import axios from 'axios';
import Modal from "../modal/Modal";

import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for tracking modal open/close
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8070/customer/get');

      const user = response.data.find(user => user.username === username && user.password === password);

      if (user) {
        setModalMessage(`Welcome to the sty ${username}, happy budgeting`); // Set success message
        setIsModalOpen(true);
      } else {
        setModalMessage('Who oinks there? Please register'); // Set error message
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error(error);
      alert('Login unsuccessful');
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);

    if (modalMessage.includes('oinks')) {
        navigate('/register'); // Navigate to register page if account creation failed
    } else {
        navigate('/planner'); // Navigate to home page if account creation succeeded
    }

    // Clear the form
   
    setUsername('');
    setPassword('');
};

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "90vh",
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
    banner: {
      width: "100%",
      backgroundColor: "#e6a4b4",
      color: "white",
      padding: "25px 0",
      textAlign: "center",
      position: "relative", 
    },
    movingText: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      animation: "moveText 20s linear infinite", // CSS animation
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
    <div>
      <div style={styles.banner}>
        <h1 style={styles.movingText}>🐷 Having an account with us is kind of a pig deal 🐷</h1>
        <br/ >
        <a href="/register"><h5>Click here to register</h5> </a>
      </div>
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
      <Modal
                open={isModalOpen}
                onClose={handleModalClose}
                message={modalMessage}
                onNavigate={handleModalClose}
            />
    </div>
    </div>
  );
}

export default Home;