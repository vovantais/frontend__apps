import React from 'react'
import { useSelector } from "react-redux";

function SchedulepPage() {
	const income = useSelector(({ budget }) => budget.income);
	const expenses = useSelector(({ budget }) => budget.expenses);
	//Todo вывод всего + разобраться с сервером 
	return (
		<div>
			<ul>
				<h3>Income</h3>
				{
					income.map((item, index) => {
						return (
							<li key={index}>
								{item}
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default SchedulepPage;
