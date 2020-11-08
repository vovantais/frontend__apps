import { combineReducers } from 'redux';

import {
	// ! Income
	GET_INCOME_FETCH,
	GET_INCOME_SUCCESS,
	GET_INCOME_FAILURE,

	POST_INCOME_FETCH,
	POST_INCOME_SUCCESS,
	POST_INCOME_FAILURE,

	PATCH_INCOME_DESCRIPTION_FETCH,
	PATCH_INCOME_DESCRIPTION_SUCCESS,
	PATCH_INCOME_DESCRIPTION_FAILURE,

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

	PATCH_EXPENSES_DESCRIPTION_FETCH,
	PATCH_EXPENSES_DESCRIPTION_SUCCESS,
	PATCH_EXPENSES_DESCRIPTION_FAILURE,

	DELETE_EXPENSES_FETCH,
	DELETE_EXPENSES_SUCCESS,
	DELETE_EXPENSES_FAILURE,

	//! MESSAGE
	CLOSE_MESSAGE,
} from '../budget/action-types';

// ! Income
const income = (prevState = { incomes: [] }, action) => {
	const { ...newState } = prevState;
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
			// todo закидывать в стор когда добовляешь 
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
			newState.incomes = newState.incomes.filter(item => item._id !== action.payload.deletedId);
			return newState;
		case DELETE_INCOME_FAILURE:
			return {
				...prevState,
				isCheckAuth: false,
			}
		case PATCH_INCOME_DESCRIPTION_FETCH:
			return {
				...prevState,
				isCheckAuth: true,
			}
		case PATCH_INCOME_DESCRIPTION_SUCCESS:
			// todo сделать поиск и обновления дескрипшина в сторе 
			// todo удалить isCheckAuth: false,
			return {
				...prevState,
				isCheckAuth: false,
			};
		case PATCH_INCOME_DESCRIPTION_FAILURE:
			return {
				...prevState,
				isCheckAuth: false,
			}
		default:
			return prevState;
	}
}
// ! Expenses  
const expenses = (prevState = { spenders: [] }, action) => {
	const { ...newState } = prevState;
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
			// todo закидывать в стор когда добовляешь 
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
			newState.spenders = newState.spenders.filter(item => item._id !== action.payload.deleteId);
			return newState;
		case DELETE_EXPENSES_FAILURE:
			return {
				...prevState,
				isCheckAuth: false,
			}
		case PATCH_EXPENSES_DESCRIPTION_FETCH:
			return {
				...prevState,
				isCheckAuth: true,
			}
		case PATCH_EXPENSES_DESCRIPTION_SUCCESS:
			// todo сделать поиск и обновления дескрипшина в сторе 
			// todo удалить isCheckAuth: false,
			return {
				...prevState,
				isCheckAuth: false,
			};
		case PATCH_EXPENSES_DESCRIPTION_FAILURE:
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
			return { ...action.payload.message };
		case DELETE_INCOME_SUCCESS:
		case DELETE_INCOME_FAILURE:
		case DELETE_EXPENSES_SUCCESS:
		case DELETE_EXPENSES_FAILURE:
		case PATCH_INCOME_DESCRIPTION_SUCCESS:
		case PATCH_INCOME_DESCRIPTION_FAILURE:
		case PATCH_EXPENSES_DESCRIPTION_SUCCESS:
		case PATCH_EXPENSES_DESCRIPTION_FAILURE:
			return { ...action.payload };
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

