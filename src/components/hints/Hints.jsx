import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hints.css';
import fastPiggy from './fastPiggy.png';
import axios from 'axios';
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";



const Hints = () => {

    const [isModalOpen, setIsModalOpen] = useState(false); // New state for tracking modal open/close
    const navigate = useNavigate();
    const [modalMessage, setModalMessage] = useState('');
    const hints = [
        "Avoid the debt sty. Don't let impulse purchases boar a hole in your wallet.",
        "Beware of get-rich-quick schemes - they're often just a pig in a poke, offering false promises.",
        "Don't be a sucker - avoid impulse buys and root out unnecessary expenses.",
        "Be a penny-pinching pig - save your spare change, every little bit helps the trough grow.",

        'Create a budget and stick to it.',
        'Automate your savings by setting up automatic transfers.',
        'Track your expenses to identify areas where you can cut back.',
        "Don't go whole hog - don't spend everything you earn, leave some for the future",
        'Consider investing your money for long-term growth.',
    ];

    const [selectedHints, setSelectedHints] = useState([]);
    const [currentHintIndex, setCurrentHintIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        afterChange: (current) => setCurrentHintIndex(current),
    };

    const handleHintClick = () => {
        setSelectedHints([...selectedHints, hints[currentHintIndex]]);
    };

    const handleCreateHint = async () => {
        const hintsString = selectedHints.join(', ');
        try {
            await axios.post('http://localhost:8070/hint/create', { hintList: hintsString });
            setModalMessage('Thanks Piglet.  Your Fave. List has been shared');
            setIsModalOpen(true);
            setSelectedHints([]);
        } catch (error) {
            console.error('Error creating hint', error);
            setModalMessage('Sorry piglet, please try again');
            setIsModalOpen(true);
        }
    };
    const closeModalAndNavigate = () => {
        setIsModalOpen(false);
        navigate('/hints');
    };


    return (
        <div className="hintbody">
            <h2 className="heading">Money Management Hints</h2>
            <Slider {...settings}>
                {hints.map((hint, index) => (
                    <div key={index}>
                        <p className="items">{hint}</p>
                    </div>
                ))}
            </Slider>
            <br />
            <br />
            <h2 className="heading" onClick={handleHintClick}>Click to save a hint</h2>
            <br />
            <div className="saved-hints-box">
                <ol>
                    {selectedHints.map((hint, index) => (
                        <li key={index} className="list-items">{hint}</li>
                    ))}
                </ol>
                <button className = "button" onClick={handleCreateHint}>Share Your Favourite Hints</button>
            </div>
            <div>
                <img src={fastPiggy} alt='fast piggy' className="moving-image" />
            </div>
            <Modal open={isModalOpen} onClose={closeModalAndNavigate} message={modalMessage} onNavigate={closeModalAndNavigate} />
        </div>
    );
};

export default Hints;