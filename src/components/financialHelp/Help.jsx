import './help.css';
import piggy2 from "../piggy2.png";
import fastPiggy from './fastPiggy.jpg';
import SadPig from './SadPig.jpg';

function Help() {
    return (
        <div className="helpbody">
            <br />
            <h2 className="heading">Help & Support</h2>
            <br/>
            <div>
            {/* <img src={fastPiggy} alt='fast piggy' className="moving-image" /> */}
            <img src={SadPig} alt='Sad piggy' className="moving-image" />
            </div>
            <div className="box">
                <img src={piggy2} alt="Piggy" className="center" />
                <h3 className='centered'>🐷<strong>Welcome to our Piggy Bank's Help and Support Page!</strong>  🐷 <br /><br />
                </h3><h5 className='centered'>
                    At Piggy Bank, we understand that sometimes navigating finances can feel like a real boar. But don't worry, we're here to help you trot along the path to financial success!

                    If you're experiencing any financial difficulty, remember: you're not alone! Even the savviest savers occasionally find themselves in a bit of a pickle. But with the right tools and resources, you can turn things around faster than you can say "hogwash"!

                    Here are some helpful resources and links to guide you through: </h5>
                    <br/>
                <p >

                    🌟 <strong>Financial Assistance:</strong> If you're facing a financial setback, there are plenty of options available to help you get back on your trotters. Check out our curated list of financial assistance programs and services. Remember, asking for help is a sign of strength, not weakness! <a href='https://www.citizensadvice.org.uk/' target="_blank" rel="noopener noreferrer">Citizens Advice: Financial Support</a><br /><br />

                    🐽 <strong>Budgeting Tips:</strong> Sometimes all it takes is a little tweak to your spending habits to make a big difference. Explore our collection of budgeting tips and tricks to help you make the most of your bacon.<a href='https://www.moneysavingexpert.com/banking/budget-planning/' target="_blank" rel="noopener noreferrer"> Budget Planner</a> <br /><br />

                    🎓 <strong>Financial Education:</strong> They say knowledge is power, and when it comes to managing your finances, truer words were never spoken. Take a peek at our recommended financial literacy resources to expand your money management know-how.<a href='https://www.moneysavingexpert.com/family/financial-education/' target="_blank" rel="noopener noreferrer"> Financial Education</a> <br /><br />

                    🛠️<strong> Debt Management:</strong> Nobody likes being in debt, but with a solid plan and a little perseverance, you can chip away at it one snout at a time. Dive into our debt management resources for strategies to tackle your debts head-on.<a href='https://www.stepchange.org/how-we-help/debt-management-plan.aspx' target="_blank" rel="noopener noreferrer"> StepChange: Debt Management</a><br /><br />

                    🌈<strong> Financial Wellness:</strong> Your financial well-being is about more than just dollars and cents—it's about peace of mind and security. Explore our tips for achieving financial wellness and sow the seeds for a brighter financial future.<a href='https://www.mind.org.uk/information-support/tips-for-everyday-living/money-and-mental-health/' target="_blank" rel="noopener noreferrer"> Mind: Money & Mental Health</a> <br /><br />
                     </p>
                    <h5 className='centered'>
                    Remember, just like a piggy bank, your financial journey is a gradual accumulation of small steps. Stay focused, stay determined, and before you know it, you'll be rolling in the mud of financial success!<br />

                    If you need any further assistance or have any questions, don't hesitate to reach out to our friendly support team. We're here to help you squeal with delight at your financial progress!<br />
                    <br />
                    Happy saving!<br />

                    🐖 The Piggy Bank Team 🐖</h5>
            </div>
        </div>
    );
}

export default Help;
