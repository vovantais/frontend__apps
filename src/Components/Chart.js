
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Doughnut } from 'react-chartjs-2';


function Chart() {

	const initialState = {
		labels: [],
		datasets: [
			{
				label: 'chart',
				backgroundColor: [
					'#B21F00',
					'#C9DE00',
					'#2FDE00',
					'#00A6B4',
					'#6800B4',
					'#ccaf52',
					'#9c3aba',
					'#c27748',
					'#3cd6c9',
					'#718070',
				],
				hoverBackgroundColor: [
					'#501800',
					'#4B5000',
					'#175000',
					'#003350',
					'#35014F',
					'#8c7732',
					'#5a1b6e',
					'#753e1b',
					'#1c756e',
					'#333833',
				],
				data: [],
			}
		]
	}

	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);
	const [chart, setChart] = useState(initialState);


	income && income.map((item) => {
		chart.datasets[0].data.push('+' + item.sumIncome);
		chart.labels.push(item.descriptionIncome);
	});
	expenses && expenses.map((item) => {
		chart.datasets[0].data.push('-' + item.sumSpent)
		chart.labels.push(item.category)
	});

	return (
		<div>
			<Doughnut
				data={chart}
				options={{
					title: {
						display: true,
						text: 'Chart',
						fontSize: 20
					},
					legend: {
						display: true,
						position: 'top'
					}
				}}
			/>
		</div >
	)
}

export default Chart
