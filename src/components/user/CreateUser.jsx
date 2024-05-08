import React, { useState } from 'react';
import axios from 'axios';
import Modal from "../modal/Modal";

import { useNavigate } from "react-router-dom";



const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "200vh",
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

const CreateUser = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // New state for tracking modal open/close
    const navigate = useNavigate();
    const [modalMessage, setModalMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8070/customer/create', {
                name,
                address,
                email,
                phone,
                username,
                password,
            });

            console.log(response.data);

            console.log('User successfully created');

            setModalMessage(`Welcome ${username}, account created`); // Set success message
            setIsModalOpen(true);
        } catch (error) {
            console.error(error);

            setModalMessage('Account creation failed, please try again'); // Set error message
            setIsModalOpen(true);
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);

        if (modalMessage.includes('failed')) {
            navigate('/register'); // Navigate to register page if account creation failed
        } else {
            navigate('/'); // Navigate to home page if account creation succeeded
        }

        // Clear the form
        setName('');
        setAddress('');
        setEmail('');
        setPhone('');
        setUsername('');
        setPassword('');
    };

    return (
        <div style={styles.container}>
            <h2 className="heading">Welcome to Piggy Bank - Save Your Bacon</h2>
            <br />
            <h3 className="heading">Create an account for access to additional swinetastic finance tips and support.</h3>
            <br />

            <form onSubmit={handleSubmit} style={styles.form}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Create</button>
            </form>
            <Modal
                open={isModalOpen}
                onClose={handleModalClose}
                message={modalMessage}
                onNavigate={handleModalClose}
            />


        </div>
    );
};

export default CreateUser;