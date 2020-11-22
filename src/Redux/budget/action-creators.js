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
export const GetIncomeFetch = () => (dispatch, getStore) => {
	dispatch({
		type: GET_INCOME_FETCH,
	});
	const { auth } = getStore();
	axios.get(`${API_URI}/income`, {
		headers: {
			'Authorization': auth && auth.auth.token,
		},
	})
		.then(res => dispatch(GetIncomeSuccess(res.data)))
		.catch(err => dispatch(GetIncomeFail(err)))
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
		newIncome,
		{
			headers: {
				'Authorization': auth && auth.auth.token,
			}
		})
		.then(res => {
			dispatch(PostIncomeSucces({
				message: res.data.message,
				income: res.data.result,
			}));
		})
		.catch(err => dispatch(PostIncomeFail({ message: err.response.data })))
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
			'Authorization': auth && auth.auth.token,
		},
	})
		.then(res => dispatch(GetExpensesSuccess(res.data)))
		.catch(err => dispatch(GetExpensesFail(err)))
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
		newExpenses,
		{
			headers: {
				'Authorization': auth && auth.auth.token,
			}
		})
		.then(res => {
			dispatch(PostExpensesSucces({
				message: res.data.message,
				expenses: res.data.result,
			}));
		})
		.catch(err => dispatch(PostExpensesFail({ message: err.response.data })))
}
export const PostExpensesSucces = (payload) => ({
	type: POST_EXPENSES_SUCCESS,
	payload,
});
export const PostExpensesFail = (payload) => ({
	type: POST_EXPENSES_FAILURE,
	payload,
});

// ! PATCH INCOME

export const PatchIncomeFetch = (id, description) => (dispatch, getStore) => {
	dispatch({
		type: PATCH_INCOME_DESCRIPTION_FETCH,
		payload: id,
	})
	const { auth } = getStore();
	axios.patch(`${API_URI}/income`, { id, description }, {
		headers: {
			'Authorization': auth && auth.auth.token,
		}
	})
		.then(res => dispatch(PatchIncomeSuccess({ ...res.data, id, description })))
		.catch(err => dispatch(PatchIncomeFail(err.response.data)))
}
export const PatchIncomeSuccess = (payload) => ({
	type: PATCH_INCOME_DESCRIPTION_SUCCESS,
	payload,
});

export const PatchIncomeFail = (payload) => ({
	type: PATCH_INCOME_DESCRIPTION_FAILURE,
	payload,
});

// ! PATCH EXPENSES

export const PatchExpensesFetch = (id, description) => (dispatch, getStore) => {
	dispatch({
		type: PATCH_EXPENSES_DESCRIPTION_FETCH,
		payload: id,
	})
	const { auth } = getStore();
	axios.patch(`${API_URI}/expenses`, { id, description }, {
		headers: {
			'Authorization': auth && auth.auth.token,
		}
	})
		.then(res => dispatch(PatchExpensesSuccess({ ...res.data, id, description })))
		.catch(err => dispatch(PatchExpensesFail(err.response.data)))
}

export const PatchExpensesSuccess = (payload) => ({
	type: PATCH_EXPENSES_DESCRIPTION_SUCCESS,
	payload,
});

export const PatchExpensesFail = (payload) => ({
	type: PATCH_EXPENSES_DESCRIPTION_FAILURE,
	payload,
});

// ! Delete INCOME

export const deleteIncomeFetch = (id) => (dispatch, getStore) => {
	dispatch({
		type: DELETE_INCOME_FETCH,
		payload: { id },
	});
	const { auth } = getStore();
	axios.delete(`${API_URI}/income`, {
		headers: {
			'Authorization': auth && auth.auth.token,
		},
		data: {
			id,
		},
	})
		.then(res => dispatch(deleteIncomeSuccess(res.data)))
		.catch(err => dispatch(deleteIncomeFail(err.response.data)));
};

export const deleteIncomeSuccess = (payload) => ({
	type: DELETE_INCOME_SUCCESS,
	payload,
})

export const deleteIncomeFail = (payload) => ({
	type: DELETE_INCOME_FAILURE,
	payload,
})

// ! Delete Expenses
export const deleteExpensesFetch = (id) => (dispatch, getStore) => {
	dispatch({
		type: DELETE_EXPENSES_FETCH,
		payload: { id },
	})
	const { auth } = getStore();
	axios.delete(`${API_URI}/expenses`,
		{
			headers: {
				'Authorization': auth && auth.auth.token,
			},
			data: {
				id,
			},
		})
		.then(res => dispatch(deleteExpensesSuccess(res.data)))
		.catch(err => dispatch(deleteExpensesFail(err.response.data)))
}

export const deleteExpensesSuccess = (payload) => ({
	type: DELETE_EXPENSES_SUCCESS,
	payload,
})

export const deleteExpensesFail = (payload) => ({
	type: DELETE_EXPENSES_FAILURE,
	payload,
})

// ! Message 
export const Message = () => ({
	type: CLOSE_MESSAGE,
});