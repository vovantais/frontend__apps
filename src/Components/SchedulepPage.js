import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { GetExpensesFetch, GetIncomeFetch } from '../Redux/budget/action-creators';
import { Doughnut } from 'react-chartjs-2';
import TableIncome from './TableIncome';
import TableExpenses from './TableExpenses';
import { API_URI } from '../Consts/consts';
import axios from 'axios';
import Balance from '../Components/Balance';

function SchedulepPage() {

	const initialState = {
		info: {}
		// labels: [],
		// datasets: [
		// 	{
		// 		label: 'chart',
		// 		backgroundColor: [
		// 			'#B21F00',
		// 			'#C9DE00',
		// 			'#2FDE00',
		// 			'#00A6B4',
		// 			'#6800B4',
		// 			'#ccaf52',
		// 			'#9c3aba',
		// 			'#c27748',
		// 			'#3cd6c9',
		// 			'#718070',
		// 		],
		// 		hoverBackgroundColor: [
		// 			'#501800',
		// 			'#4B5000',
		// 			'#175000',
		// 			'#003350',
		// 			'#35014F',
		// 			'#8c7732',
		// 			'#5a1b6e',
		// 			'#753e1b',
		// 			'#1c756e',
		// 			'#333833',
		// 		],
		// 		data: [],
		// 	}
		// ]
	}

	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);
	const [chart, setChart] = useState(initialState);
	const dispatch = useDispatch();


	useEffect(() => {
		// dispatch(GetIncomeFetch())
		// dispatch(GetExpensesFetch())


		// axios(`${API_URI}/expenses`)
		// 	.then(res => {
		// 		const result = res.data;
		// 		let sum = [];
		// 		let category = [];
		// 		result.forEach(item => {
		// 			sum.push(item.sumSpent)
		// 			category.push(item.category)
		// 		});
		// 		console.log(sum);
		// 		console.log(category);

		// 		setChart({
		// 			info: {
		// 				labels: sum,
		// 				datasets: [
		// 					{
		// 						label: 'chart',
		// 						backgroundColor: [
		// 							'#B21F00',
		// 							'#C9DE00',
		// 							'#2FDE00',
		// 							'#00A6B4',
		// 							'#6800B4',
		// 							'#ccaf52',
		// 							'#9c3aba',
		// 							'#c27748',
		// 							'#3cd6c9',
		// 							'#718070',
		// 						],
		// 						hoverBackgroundColor: [
		// 							'#501800',
		// 							'#4B5000',
		// 							'#175000',
		// 							'#003350',
		// 							'#35014F',
		// 							'#8c7732',
		// 							'#5a1b6e',
		// 							'#753e1b',
		// 							'#1c756e',
		// 							'#333833',
		// 						],
		// 						data: category,
		// 					}
		// 				]
		// 			}
		// 		})
		// 	})

	}, [])

	return (
		<>
			<Balance />
			<TableIncome />
			<TableExpenses />



			{/* 
			{
				income ? income.map((item, index) => (
					<div key={index}>
						{chart.datasets[0].data.push(item.sumIncome)}
						{chart.labels.push('income')}
					</div>
				)) : null
			}
			{
				expenses ? expenses.map((item, index) => (
					<div key={index}>
						{chart.datasets[0].data.push(item.sumSpent)}
						{chart.labels.push(item.category)}
					</div>
				)) : null
			} */}

			{/* <Doughnut
				data={chart.info}
				options={{
					title: {
						display: true,
						text: 'Chart',
						fontSize: 50
					},
					legend: {
						display: true,
						position: 'top'
					}
				}}
			/> */}
		</>

	);
}

export default SchedulepPage;
