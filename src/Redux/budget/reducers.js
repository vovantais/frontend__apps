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
const income = (prevState = [], action) => {
	const [...state] = prevState;
	switch (action.type) {
		case GET_INCOME_FETCH:
			return {
				...state,
				isCheckAuth: true,
			}
		case GET_INCOME_SUCCESS:
			return {
				isCheckAuth: false,
				sumIncome: action.payload.sumIncome,
				dateTimeIncome: action.payload.dateTimeIncome,
				descriptionIncome: action.payload.descriptionIncome,
			}
		case GET_INCOME_FAILURE:
			return {
				...state,
				isCheckAuth: false,
			}
		case POST_INCOME_FETCH:
			return state;
		case POST_INCOME_SUCCESS:
			console.log(action.payload);
			state.push(action.payload)
		case POST_INCOME_FAILURE:
			return state;
		default:
			return state;
	}
}
// ! Expenses  
const expenses = (prevState = [], action) => {
	const [...state] = prevState;
	switch (action.type) {
		case GET_EXPENSES_FETCH:
			return {
				...state,
				isCheckAuth: true,
			}
		case GET_EXPENSES_SUCCESS:
			return {
				isCheckAuth: false,
				sumSpent: action.payload.sumSpent,
				category: action.payload.category,
				dateTimeExpenses: action.payload.dateTimeExpenses,
				descriptionExpenses: action.payload.descriptionExpenses,
			}
		case GET_EXPENSES_FAILURE:
			return {
				...state,
				isCheckAuth: false,
			}
		case POST_EXPENSES_FETCH:
			return state;
		case POST_EXPENSES_SUCCESS:
			console.log(action.payload);
			state.push(action.payload)
		case POST_EXPENSES_FAILURE:
			return state;
		default:
			return state;
	}
}

export default combineReducers({
	income,
	expenses,
});

