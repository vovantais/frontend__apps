import {
	SORT_INCOME,
	SORT_EXPENSES,
	SORT_DIAGRAMA,
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
export const sortDiagrama = (date) => (dispatch) => {
	dispatch({
		type: SORT_DIAGRAMA,
		payload: date,
	})
}