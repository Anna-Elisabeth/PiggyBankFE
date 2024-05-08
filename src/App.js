import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Hints from './components/hints/Hints';
import piggy1 from "./piggy1.png";
import CreditScore from './components/creditScore/CreditScore';
import Planner from './components/budgetPlanner/Planner';
import Calculator from './components/calculator/Calculator';
import CreateUser from './components/user/CreateUser';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';


function App() {

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    return (
        <body>

<Modal show={isImageModalOpen} onHide={() => setIsImageModalOpen(false)}>
    <Modal.Body>
        <img src={piggy1} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    </Modal.Body>
</Modal>

            <div>
                <BrowserRouter>

                    {/* <!-- Navbar --> */}
                    <nav class="navbar navbar-expand-lg navbar-dark bg-light gradient-custom">
                        {/* <!-- Container wrapper --> */}
                        <div class="container-fluid">
                            {/* <!-- Toggle button --> */}
                            <button
                                class="navbar-toggler text-white"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i class="fas fa-bars"></i>
                            </button>

                            {/* <!-- Collapsible wrapper --> */}
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* <!-- Navbar brand --> */}
                                <a class="navbar-brand mt-2 mt-lg-0" href="#">
                                <img
    src={piggy1}
    alt="Logo"
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
    onClick={() => setIsImageModalOpen(true)}
/></a>

                                {/* <!-- Left links --> */}
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item" style={{ marginLeft: '100px' }}>
                                        <a class="nav-link" href="/">Login</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/hints">Handy Hints</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/creditscore">Credit Score</a>
                                    </li>
                                    {/* <li class="nav-item ">
                                        <a class="nav-link" href="/planner">Budget Planner</a>
                                    </li> */}
                                    <li class="nav-item ">
                                        <a class="nav-link" href="/calculator">Calculator</a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link" href="/register">Register</a>
                                    </li>


                                </ul>
                                {/* <!-- Left links --> */}
                            </div>
                            {/* <!-- Collapsible wrapper --> */}




                            {/* <!-- Right elements --> */}
                        </div>
                        {/* <!-- Container wrapper --> */}
                    </nav>
                    {/* <!-- Navbar --> */}




                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/hints' element={<Hints />} />
                        <Route path='/creditscore' element={<CreditScore />} />
                        <Route path='/planner' element={<Planner />} />
                        <Route path='/calculator' element={<Calculator />} />
                        <Route path='/register' element={<CreateUser />} />







                    </Routes>




                </BrowserRouter>



            </div>

        </body>



    );
}

export default App;
