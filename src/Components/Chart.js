
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Doughnut } from 'react-chartjs-2';


function Chart() {

	let sortResult = null;

	const initialState = {
		labels: [],
		datasets: [
			{
				label: 'chart',
				backgroundColor: [
					'#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4', '#ccaf52', '#9c3aba', '#c27748', '#3cd6c9', '#718070', '#FF00FF', '#A0522D', '#8A2BE2', '#FF6347', '#FF1493', '#00FF00', '#6B8E23', '#00FFFF', '#0000FF', '#808080', '#2F4F4F', '#A52A2A'
				],
				hoverBackgroundColor: [
					'#501800', '#4B5000', '#175000', '#003350', '#35014F', '#8c7732', '#5a1b6e', '#753e1b', '#1c756e', '#333833', '#800080', '#8B4513', '#9370DB', '#FF4500', '#C71585', '#32CD32', '#556B2F', '#00CED1', '#00008B', '#696969', '#2F4F4F', '#800000',
				],
				data: [],
			}
		]
	}

	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);

	const [chart, setChart] = useState(initialState);
	const { month, year } = useSelector(({ sort }) => sort.filterDiagrama);


	// const initialStateSort = {
	// 	month: '',
	// 	year: '',
	// }
	// const { sort, setSort } = useState(initialStateSort);

	// useEffect(() => {
	// 	chart.labels = [];
	// 	chart.datasets[0].data = [];
	// 	income && income.map((item) => {
	// 		chart.datasets[0].data.push('+' + item.sumIncome);
	// 		chart.labels.push(item.descriptionIncome);
	// 	});
	// 	expenses && expenses.map((item) => {
	// 		chart.datasets[0].data.push('-' + item.sumSpent)
	// 		chart.labels.push(item.category)
	// 	});
	// }, [income.length, expenses.length])

	// 	expenses && expenses.map((item, index) => {
	// 	if (((new Date(item.dateTimeExpenses)).getFullYear()).toString() === year &&
	// 		(new Date(item.dateTimeExpenses)).toLocaleString('en-us', { month: 'long' }) === month) {
	// 		chart.datasets[0].data.push('-' + item.sumSpent)
	// 		chart.labels.push(item.category);
	// 	}
	// })

	// todo make render if feild month and year change 
	useEffect(() => {
		chart.labels = [];
		chart.datasets[0].data = [];
		income && income.map(item => {
			if (new Date(item.dateTimeIncome).toLocaleString('en-us', { month: 'long' }) === new Date().toLocaleString('en-us', { month: 'long' }) && new Date(item.dateTimeIncome).getFullYear() === new Date().getFullYear()) {
				chart.datasets[0].data.push('+' + item.sumIncome);
				chart.labels.push(item.descriptionIncome);
			}
		})
		expenses && expenses.map((item) => {
			if (new Date(item.dateTimeExpenses).toLocaleString('en-us', { month: 'long' }) === new Date().toLocaleString('en-us', { month: 'long' }) && new Date(item.dateTimeExpenses).getFullYear() === new Date().getFullYear()) {
				chart.datasets[0].data.push('-' + item.sumSpent)
				chart.labels.push(item.category);
			}
		});
	}, [income.length, expenses.length]);



	return (
		income.length || expenses.length > 1 ?
			(<div className='crart-size'>
				<Doughnut
					data={chart}
					options={{
						title: {
							display: true,
							text: 'Diagram income and expenses',
							fontSize: 22
						},
						legend: {
							display: true,
							position: 'top'
						},
						responsive: true,
						maintainAspectRatio: false,
					}}
				/>
			</div >) : null
	)
}

export default Chart
