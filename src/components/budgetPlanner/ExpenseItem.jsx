import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from './context/AppContext';

function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};
    return ( 
		//Expense name and cost styling
        <li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3' style={{color:"black"}}>£{props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
     );
}

export default ExpenseItem;