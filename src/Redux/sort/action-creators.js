import {
	SORT_INCOME,
	SORT_EXPENSES,
} from './action-types';

export const sortIncome = (date) => (dispatch) => {
	dispatch({
		type: SORT_INCOME,
		payload: date,
	})
}
export const sortExpenses = (date) => (dispatch) => {
	dispatch({
		type: SORT_EXPENSES,
		payload: date,
	})
}