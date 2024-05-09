import CreateCalculator from "./CreateCalculator";
import './styles.css';

function Calculator(){
    return(
        <div className= "background">
            <h1 className="heading"> Don't be a piggy bank with a hole in its bottom – use this ham-dy calculator for good financial health</h1>
            <br/>
            <h2 className="heading"> No More Ham-handed Planning! Calculate your monthly expenses, income, savings, and debt payments</h2>
            <div className="calculator-container">
                <div className="box">Piggy Bank members have access to a swinetastic budget planner and a whole muddle of financial tools to help you trot towards your goals! Join today and stop wallowing in financial stress.</div>
                <div className="calculator-wrapper">
        <CreateCalculator/>
    </div>
                <div className="box">Piggy Bank members have access to a swinetastic budget planner and a whole muddle of financial tools to help you trot towards your goals! Join today and stop wallowing in financial stress. </div>
            </div>
        </div>
    );
}
export default Calculator;