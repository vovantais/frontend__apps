import { combineReducers } from 'redux';
import {
	AUTH_SIGNIN_FETCH,
	AUTH_SIGNIN_SUCCESS,
	AUTH_SIGNIN_FAILURE,

	AUTH_LOGIN_FETCH,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
} from './action-types';

const AuthReduser = (prevState = {}, action) => {
	const { ...state } = prevState;
	switch (action.type) {
		case AUTH_LOGIN_FETCH:
			return {
				isCheckAuth: true,
			}
		case AUTH_LOGIN_SUCCESS:
			return {
				isCheckAuth: false,
				token: action.payload.token,
				isAuthAccsess: true,
			}
		case AUTH_LOGIN_FAILURE:
			return {
				isCheckAuth: false,
			}
		case AUTH_SIGNIN_FETCH:
			return {
				isCheckAuth: true,
			}
		case AUTH_SIGNIN_SUCCESS:
			return {
				isCheckAuth: false,
			}
		case AUTH_SIGNIN_FAILURE:
			return {
				isCheckAuth: false,
			}
		default:
			return state;
	}
}

const reducers = combineReducers({
	auth: AuthReduser,
});

export default reducers;
