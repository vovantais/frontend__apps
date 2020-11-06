import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Tabs, Tab } from 'react-bootstrap';
import { GetExpensesFetch, GetIncomeFetch } from '../Redux/budget/action-creators';

function Balance() {
	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(GetIncomeFetch())
		dispatch(GetExpensesFetch())
	}, [])
	const incom = [];
	const expense = [];
	let resIncome = 0;
	let resExpenses = 0;
	let balance = 0;
	return (
		<>
			{
				income ? income.map((item) => (
					<p style={{ display: 'none' }}>{incom.push(item.sumIncome)}</p>
				)) : null
			}
			{
				expenses ? expenses.map((item, index) => (
					<p style={{ display: 'none' }}>{expense.push(item.sumSpent)}</p>
				)) : null
			}
			{
				incom.map(item => {
					resIncome += +item;
				})
			}
			{
				expense.map(item => {
					resExpenses += +item;
				})
			}
			<div className='balance-tab'>
				<Tabs defaultActiveKey="Balance" id="uncontrolled-tab-example" className='balance-tabs'>
					<Tab eventKey="Balance" title="Balance" className='balance-total'>
						{balance += (resIncome - resExpenses)} BUN
					</Tab>
					<Tab eventKey="Income" title="Income" className='balance-income'>
						+{resIncome} BUN
					</Tab>
					<Tab eventKey="Expenses" title="Expenses" className='balance-expenses'>
						-{resExpenses} BUN
					</Tab>
				</Tabs>
			</div>
		</>
	)
}

export default Balance
