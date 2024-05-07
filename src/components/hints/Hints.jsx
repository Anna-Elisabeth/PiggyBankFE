import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './hints.css';

const Hints = () => {
    const hints = [
        'Save money by cooking at home instead of eating out.',
        'Create a budget and stick to it.',
        'Automate your savings by setting up automatic transfers.',
        'Track your expenses to identify areas where you can cut back.',
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
        autoplaySpeed: 6000,
        afterChange: (current) => setCurrentHintIndex(current),
    };

    const handleHintClick = () => {
        setSelectedHints([...selectedHints, hints[currentHintIndex]]);
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
            <br/>
            <br/>
            <h2 className="heading" onClick={handleHintClick}>Click to save a hint</h2>
            <br/>
            <div className="saved-hints-box">
                <ol>
                    {selectedHints.map((hint, index) => (
                        <li key={index} className="list-items">{hint}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Hints;