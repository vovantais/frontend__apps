
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Bar } from 'react-chartjs-2';


function ChartBar() {

	const initialState = {
		labels: [],
		datasets: [
			{
				backgroundColor: [
					'#2FDE00', '#B21F00', '#C9DE00',
				],
				hoverBackgroundColor: [
					'#175000', '#501800', '#4B5000',
				],
				data: [],
			}
		]
	}

	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);
	const [chart, setChart] = useState(initialState);

	useEffect(() => {
		chart.labels = [];
		chart.datasets[0].data = [];
		const incomeAll = () => {
			let allIncome = 0;
			income && income.map((item) => {
				if (new Date(item.dateTimeIncome).toLocaleString('en-us', { month: 'long' }) === new Date().toLocaleString('en-us', { month: 'long' }) && new Date(item.dateTimeIncome).getFullYear() === new Date().getFullYear()) {
					allIncome += +item.sumIncome;
				}
			});
			return allIncome;
		}

		chart.datasets[0].data.push('+' + incomeAll());
		chart.datasets[0].data.length > 0 && chart.labels.push(new Date().toLocaleString('en-us', { month: 'long' }) + " " + new Date().getFullYear());
		const ExpensesAll = () => {
			let allExpenses = 0;
			expenses && expenses.map((item) => {
				if (new Date(item.dateTimeExpenses).toLocaleString('en-us', { month: 'long' }) === new Date().toLocaleString('en-us', { month: 'long' }) && new Date(item.dateTimeExpenses).getFullYear() === new Date().getFullYear()) {
					allExpenses += +item.sumSpent;
				}
			});
			return allExpenses;
		}
		chart.datasets[0].data.push('-' + ExpensesAll());
		chart.datasets[0].data.length > 0 && chart.labels.push(new Date().toLocaleString('en-us', { month: 'long' }) + " " + new Date().getFullYear());
	}, [income.length, expenses.length])

	return (
		income.length || expenses.length > 1 ?
			(<div className='crart-bar'>
				<h3 className='text-center'>Income and Expenses for the current month</h3>
				<Bar
					data={chart}
					options={{
						type: 'bar',
						legend: {
							display: false,
						},
						responsive: true,
						maintainAspectRatio: false,
						fontSize: 20,
						labels: {
							fontSize: 20,
						}
					}}
				/>
			</div >) : null
	)
}

export default ChartBar;
