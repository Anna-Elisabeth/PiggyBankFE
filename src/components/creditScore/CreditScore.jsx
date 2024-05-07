import './creditscore.css';
import piggy2 from "../piggy2.png";

const CreditScore = () => {
    return (
        <div className = "creditbody">
            <h2 className= "heading">Understanding Credit Scores</h2>
            <div className = "box">
            <img src={piggy2} alt="Piggy" className="center"/>
                <h4>A credit score is a numerical representation of an individual's creditworthiness. It helps lenders assess the risk of lending money to someone.  In other words, it shows how sow-lid you are with your finances! A good credit score can unlock lower interest rates and better loan terms, so it's important to maintain a healthy one.</h4>
                <img src={piggy2} alt="Piggy" className="center"/>
                <h4>In the UK, you can check your credit score for free using various credit reference agencies. One popular agency is Experian.</h4>
                <img src={piggy2} alt="Piggy" className="center"/>
                <h4>To check your credit score for free, you can visit the Experian website:</h4>
                <img src={piggy2} alt="Piggy" className="center"/>
            </div>
            <br/>
            <a className = "box" href="https://www.experian.co.uk" target="_blank" rel="noopener noreferrer">Check Your Credit Score</a>
        </div>
    );
};

export default CreditScore;