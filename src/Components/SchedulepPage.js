import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { GetExpensesFetch, GetIncomeFetch } from '../Redux/budget/action-creators';
import TableIncome from './TableIncome';
import TableExpenses from './TableExpenses';
import Balance from '../Components/Balance';
import Chart from '../Components/Chart';
function SchedulepPage() {


	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetIncomeFetch());
		dispatch(GetExpensesFetch());
	}, [])

	return (
		<>
			<Balance />
			<TableIncome />
			<TableExpenses />
			<Chart />
		</>
	);
}

export default SchedulepPage;
