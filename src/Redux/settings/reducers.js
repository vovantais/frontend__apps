import { combineReducers } from 'redux';

import {
	//*Name 
	PATCH_NAME_FETCH,
	PATCH_NAME_SUCCESS,
	PATCH_NAME_FAILURE,
	// *City
	PATCH_CITY_FETCH,
	PATCH_CITY_SUCCESS,
	PATCH_CITY_FAILURE,

	SETTINGS_MESSAGE
} from './action-types';

import { AUTH_LOGIN_SUCCESS } from '../auth/action-types';

// todo сделать get запрос на сервер для получения данных
const settings = (prevState = {}, action) => {
	switch (action.type) {
		case AUTH_LOGIN_SUCCESS:
			return {
				userName: action.payload.userName,
				city: action.payload.city,
			}
		case PATCH_NAME_FETCH:
			return prevState;
		case PATCH_NAME_SUCCESS:
			prevState.userName = action.payload.name;
			return prevState;
		case PATCH_NAME_FAILURE:
			return prevState;
		case PATCH_CITY_FETCH:
			return prevState;
		case PATCH_CITY_SUCCESS:
			prevState.city = action.payload.city;
			return prevState;
		case PATCH_CITY_FAILURE:
			return prevState;
		default:
			return prevState;
	}
}

const messages = (prevState = {}, action) => {
	switch (action.type) {
		case PATCH_NAME_SUCCESS:
		case PATCH_NAME_FAILURE:
		case PATCH_CITY_SUCCESS:
		case PATCH_CITY_FAILURE:
			return { ...action.payload.message }
		case SETTINGS_MESSAGE:
			return {};
		default:
			return prevState;
	}
}

export default combineReducers({
	settings,
	messages,
});