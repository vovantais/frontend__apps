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

	// *Password
	PATCH_PASSWORD_FETCH,
	PATCH_PASSWORD_SUCCESS,
	PATCH_PASSWORD_FAILURE,

	SETTINGS_MESSAGE
} from './action-types';

import { AUTH_LOGIN_SUCCESS } from '../auth/action-types';

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
		case PATCH_PASSWORD_SUCCESS:
		case PATCH_PASSWORD_FAILURE:
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