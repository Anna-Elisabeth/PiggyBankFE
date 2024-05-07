import React from 'react';
import './budget.css';

function ViewBudget(props) {
    return ( 
        <>
			<span>Budget: £{props.budget}</span>
			<button type='button' class='btn btn-custom' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
     );
}

export default ViewBudget;