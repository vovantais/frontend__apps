import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Tabs, Tab } from 'react-bootstrap';

function Balance() {

	const initialState = {
		totalBalance: 0,
		totalIncome: 0,
		totalExpenses: 0,
	}

	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);
	const [balance, setBalance] = useState(initialState);

	useEffect(() => {

		const incomeAll = () => {
			let incom = 0;
			income && income.map((item) => {
				if (new Date(item.dateTimeIncome).toLocaleString('en-us', { month: 'long' }) === new Date().toLocaleString('en-us', { month: 'long' }) && new Date(item.dateTimeIncome).getFullYear() === new Date().getFullYear()) {
					incom += +item.sumIncome;
				}
			});
			return incom;
		}

		const ExpensesAll = () => {
			let expense = 0;
			expenses && expenses.map((item) => {
				if (new Date(item.dateTimeExpenses).toLocaleString('en-us', { month: 'long' }) === new Date().toLocaleString('en-us', { month: 'long' }) && new Date(item.dateTimeExpenses).getFullYear() === new Date().getFullYear()) {
					expense += +item.sumSpent;
				}
			});
			return expense;
		}

		setBalance({
			...balance,
			totalBalance: incomeAll() - ExpensesAll(),
			totalIncome: incomeAll(),
			totalExpenses: ExpensesAll(),
		})

	}, [income.length, expenses.length])

	return (
		<>
			<div className='balance-tab'>
				<h3>Balance for the current month</h3>
				<Tabs defaultActiveKey="Balance" id="uncontrolled-tab-example" className='balance-tabs'>
					<Tab eventKey="Balance" title="Balance" className={balance.totalBalance > 0 ? "balance-total" : "balance-total-red"}>
						{balance.totalBalance} BUN
					</Tab>
					<Tab eventKey="Income" title="Income" className='balance-income'>
						+{balance.totalIncome} BUN
					</Tab>
					<Tab eventKey="Expenses" title="Expenses" className='balance-expenses'>
						-{balance.totalExpenses} BUN
					</Tab>
				</Tabs>
			</div>
		</>
	)
}

export default Balance
