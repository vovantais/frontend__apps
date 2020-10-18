import axios from 'axios';
import { API_URI } from '../../Consts/consts';
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
export const GetIncomeFetch = () => (dispatch, getStore) => {
	dispatch({
		type: GET_INCOME_FETCH,
	});
	const { auth } = getStore();
	axios.get(`${API_URI}/income`, {
		headers: {
			'Authorization': auth && auth.token,
		},
	})
		.then(res => dispatch(GetIncomeSuccess(res.data)))
		.catch(err => dispatch(GetIncomeFail(err.response)))
}
export const GetIncomeSuccess = (payload) => ({
	type: GET_INCOME_SUCCESS,
	payload,
});
export const GetIncomeFail = (payload) => ({
	type: GET_INCOME_FAILURE,
	payload,
});


export const PostIncomeFetch = (newIncome) => (dispatch, getStore) => {
	dispatch({
		type: POST_INCOME_FETCH,
	})
	const { auth } = getStore();
	axios.post(`${API_URI}/income`,
		{
			newIncome,
		},
		{
			headers: {
				'Authorization': auth && auth.token,
			}
		})
		.then(res => {
			dispatch(PostIncomeSucces({
				message: res.data,
				// todo что приходит с бека и в reducers
				income: newIncome,
			}));
		})
		.catch(err => dispatch(PostIncomeFail(err.response)))
}
export const PostIncomeSucces = (payload) => ({
	type: POST_INCOME_SUCCESS,
	payload,
});
export const PostIncomeFail = (payload) => ({
	type: POST_INCOME_FAILURE,
	payload,
});

// ! Expenses  

export const GetExpensesFetch = () => (dispatch, getStore) => {
	dispatch({
		type: GET_EXPENSES_FETCH,
	});
	const { auth } = getStore();
	axios.get(`${API_URI}/expenses`, {
		headers: {
			'Authorization': auth && auth.token,
		},
	})
		.then(res => dispatch(GetExpensesSuccess(res.data)))
		.catch(err => dispatch(GetExpensesFail(err.response)))
}
export const GetExpensesSuccess = (payload) => ({
	type: GET_EXPENSES_SUCCESS,
	payload,
});
export const GetExpensesFail = (payload) => ({
	type: GET_EXPENSES_FAILURE,
	payload,
});

export const PostExpensesFetch = (newExpenses) => (dispatch, getStore) => {
	dispatch({
		type: POST_EXPENSES_FETCH,
	})
	const { auth } = getStore();
	axios.post(`${API_URI}/expenses`,
		{
			newExpenses,
		},
		{
			headers: {
				'Authorization': auth && auth.token,
			}
		})
		.then(res => {
			dispatch(PostExpensesSucces({
				message: res.data,
				// todo что приходит с бека и в reducers
				expenses: newExpenses,
			}));
		})
		.catch(err => dispatch(PostExpensesFail(err.response)))
}
export const PostExpensesSucces = (payload) => ({
	type: POST_EXPENSES_SUCCESS,
	payload,
});
export const PostExpensesFail = (payload) => ({
	type: POST_EXPENSES_FAILURE,
	payload,
});
