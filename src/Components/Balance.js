import React from 'react';
import { useSelector } from "react-redux";
import { Tabs, Tab } from 'react-bootstrap';

function Balance() {
	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);
	const incom = [];
	const expense = [];
	let resIncome = 0;
	let resExpenses = 0;
	let balance = 0;
	return (
		<>
			{
				income && income.map((item, index) => (
					<p key={index} style={{ display: 'none' }}>{incom.push(item.sumIncome)}</p>
				))
			}
			{
				expenses && expenses.map((item, index) => (
					<p key={index} style={{ display: 'none' }}>{expense.push(item.sumSpent)}</p>
				))
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
