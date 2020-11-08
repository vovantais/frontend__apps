import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetExpensesFetch, GetIncomeFetch } from '../Redux/budget/action-creators';
import TableIncome from './TableIncome';
import TableExpenses from './TableExpenses';
import Balance from '../Components/Balance';
import Chart from '../Components/Chart';
import SortDate from './SortDate';

function SchedulepPage() {


	const dispatch = useDispatch();
	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);



	useEffect(() => {
		dispatch(GetIncomeFetch());
		dispatch(GetExpensesFetch());
	}, [income && income.length, expenses && expenses.length])

	return (
		<>
			<Balance />
			<SortDate />
			<Chart />
			<TableIncome />
			<TableExpenses />
		</>
	);
}

export default SchedulepPage;
