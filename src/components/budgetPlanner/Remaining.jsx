import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import key from '../../BudgetKey.png';



function Remaining() {
    const { expenses, budget } = useContext(AppContext);
	

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
	const percentage = ((totalExpenses / budget)*100);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return ( 
        <div>
			<div class={`alert p-4 ${alertType}`}>
			<span>Remaining: £{budget - totalExpenses}</span>
		</div>
		<div>
		<CircularProgressbarWithChildren
  value={percentage}
  
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',

    // Text size
    textSize: '6px',
	

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    //pathTransition: 'none',

    // Colors
    pathColor: `rgba(255, 20, 147, ${percentage / 10})`,
    textColor: '#FF69B4',
    trailColor: '#FFF0F5',
    backgroundColor: '#FFF0F5',
  })}
>
<div style={{ fontSize: 22, marginTop: -5, textAlign:"center" }}>
    <strong style={{ fontSize: 35}}>{"£"+(budget - totalExpenses)}</strong><br></br> remaining of {"£"+(budget)}
  </div>
</CircularProgressbarWithChildren>
<><img src={key} style={{width:"45%", display:"block",marginLeft: "auto", marginRight: "auto"}}/></>

		</div>
		</div>
     );
}

export default Remaining;