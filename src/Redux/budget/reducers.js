import { combineReducers } from 'redux';

import {
	// ! Income
	GET_INCOME_FETCH,
	GET_INCOME_SUCCESS,
	GET_INCOME_FAILURE,

	POST_INCOME_FETCH,
	POST_INCOME_SUCCESS,
	POST_INCOME_FAILURE,

	PUT_INCOME_FETCH,
	PUT_INCOME_SUCCESS,
	PUT_INCOME_FAILURE,

	DELETE_INCOME_FETCH,
	DELETE_INCOME_SUCCESS,
	DELETE_INCOME_FAILURE,

	// ! Expenses  
	GET_EXPENSES_FETCH,
	GET_EXPENSES_SUCCESS,
	GET_EXPENSES_FAILURE,

	POST_EXPENSES_FETCH,
	POST_EXPENSES_SUCCESS,
	POST_EXPENSES_FAILURE,

	PUT_EXPENSES_FETCH,
	PUT_EXPENSES_SUCCESS,
	PUT_EXPENSES_FAILURE,

	DELETE_EXPENSES_FETCH,
	DELETE_EXPENSES_SUCCESS,
	DELETE_EXPENSES_FAILURE,

	//! MESSAGE
	CLOSE_MESSAGE,
} from '../budget/action-types';

// ! Income
const income = (prevState = {}, action) => {
	switch (action.type) {
		case GET_INCOME_FETCH:
			return {
				...prevState,
				isCheckAuth: true,
			}
		case GET_INCOME_SUCCESS:
			return {
				incomes: action.payload,
				isCheckAuth: false,
			}
		case GET_INCOME_FAILURE:
			return {
				...prevState,
				isCheckAuth: false,
			}
		case POST_INCOME_FETCH:
			return prevState;
		case POST_INCOME_SUCCESS:
			// todo 
			// console.log(action.payload);
			// return prevState.budget.income.incomes.push(action.payload)
			return {
				...prevState,
			}
		case POST_INCOME_FAILURE:
			return prevState;
		case DELETE_INCOME_FETCH:
			return {
				...prevState,
				isCheckAuth: true,
			}
		case DELETE_INCOME_SUCCESS:
			console.log(prevState.budget.income.incomes.filter(item => item._id !== action.payload.deleteId));
			return prevState.budget.income.incomes.filter(item => item._id !== action.payload.deleteId);
		case DELETE_INCOME_FAILURE:
			return {
				...prevState,
				isCheckAuth: false,
			}
		default:
			return prevState;
	}
}
// ! Expenses  
const expenses = (prevState = {}, action) => {
	switch (action.type) {
		case GET_EXPENSES_FETCH:
			return {
				...prevState,
				isCheckAuth: true,
			}
		case GET_EXPENSES_SUCCESS:
			return {
				spenders: action.payload,
				isCheckAuth: false,
			}
		case GET_EXPENSES_FAILURE:
			return {
				...prevState,
				isCheckAuth: false,
			}
		case POST_EXPENSES_FETCH:
			return prevState;
		case POST_EXPENSES_SUCCESS:
			// todo
			// console.log(action.payload);
			// return prevState.budget.income.incomes.push(action.payload)
			return {
				...prevState,
			}
		case POST_EXPENSES_FAILURE:
			return prevState;
		case DELETE_EXPENSES_FETCH:
			return {
				...prevState,
				isCheckAuth: true,
			}
		case DELETE_EXPENSES_SUCCESS:
			return prevState.budget.income.incomes.filter(item => item._id !== action.payload.deleteId);
		case DELETE_EXPENSES_FAILURE:
			return {
				...prevState,
				isCheckAuth: false,
			}
		default:
			return prevState;
	}
}

const messages = (prevState = {}, action) => {
	switch (action.type) {
		case GET_INCOME_SUCCESS:
		case GET_INCOME_FAILURE:
		case GET_EXPENSES_SUCCESS:
		case GET_EXPENSES_FAILURE:
		case POST_INCOME_SUCCESS:
		case POST_INCOME_FAILURE:
		case POST_EXPENSES_SUCCESS:
		case POST_EXPENSES_FAILURE:
		case DELETE_INCOME_SUCCESS:
		case DELETE_INCOME_FAILURE:
		case DELETE_EXPENSES_SUCCESS:
		case DELETE_EXPENSES_FAILURE:
			return { ...action.payload.message };
		case CLOSE_MESSAGE:
			return {};
		default:
			return prevState;
	}
}

export default combineReducers({
	income,
	expenses,
	messages,
});

