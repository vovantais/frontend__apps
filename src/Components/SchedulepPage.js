import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetExpensesFetch, GetIncomeFetch } from '../Redux/budget/action-creators';
import TableIncome from './TableIncome';
import TableExpenses from './TableExpenses';
import Balance from '../Components/Balance';
import Chart from '../Components/Chart';
import ChartBar from '../Components/ChartBar';
import SortDateIncome from './SortDateIncome';
import SortDateExpenses from './SortDateExpenses';
import SortDiagrama from './SortDiagrama';
import { Accordion, Card } from 'react-bootstrap';


function SchedulepPage() {

	const dispatch = useDispatch();
	const income = useSelector(({ budget }) => budget.income.incomes);
	const expenses = useSelector(({ budget }) => budget.expenses.spenders);



	useEffect(() => {
		dispatch(GetIncomeFetch());
		dispatch(GetExpensesFetch());
	}, [income && income.length, expenses && expenses.length])

	return (
		<div className='wrappers charts' >
			<div className='wrapper-balance-sort'>
				<Balance />
				<Accordion className='accordion' >
					<Card>
						<Accordion.Toggle as={Card.Header} className="accordion-toogle" eventKey="0">
							Sort income by date
    				</Accordion.Toggle>
						<Accordion.Collapse eventKey="0" >
							<Card.Body><SortDateIncome /></Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card >
						<Accordion.Toggle as={Card.Header} className="accordion-toogle " eventKey="1">
							Sort expenses by date
    				</Accordion.Toggle>
						<Accordion.Collapse eventKey="1" >
							<Card.Body><SortDateExpenses /></Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card >
						<Accordion.Toggle as={Card.Header} className="accordion-toogle " eventKey="2">
							Sort Diagrama by date
    				</Accordion.Toggle>
						<Accordion.Collapse eventKey="2" >
							<Card.Body><SortDiagrama /></Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
			<TableIncome />
			<TableExpenses />
			<Chart />
			<ChartBar />
		</div>
	);
}

export default SchedulepPage;
