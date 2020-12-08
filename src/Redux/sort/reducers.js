import { combineReducers } from 'redux';
import {
	SORT_INCOME,
	SORT_EXPENSES,
	SORT_DIAGRAMA,
} from './action-types';

const filterIncome = (state = {}, action) => {
	switch (action.type) {
		case SORT_INCOME:
			return action.payload;
		default:
			return {
				month: '',
				year: '',
			}
	}
}
const filterExpenses = (state = {}, action) => {
	switch (action.type) {
		case SORT_EXPENSES:
			return action.payload;
		default:
			return {
				month: '',
				year: '',
			}
	}
}
const filterDiagrama = (stata = {}, action) => {
	switch (action.type) {
		case SORT_DIAGRAMA:
			return action.payload;
		default:
			return {
				month: '',
				year: '',
			}
	}
}
export default combineReducers({
	filterIncome,
	filterExpenses,
	filterDiagrama,
});