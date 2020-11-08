import { combineReducers } from 'redux';
import {
	AUTH_SIGNIN_FETCH,
	AUTH_SIGNIN_SUCCESS,
	AUTH_SIGNIN_FAILURE,

	AUTH_LOGIN_FETCH,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,

	VERIFY_ACCOUNT_FETCH,
	VERIFY_ACCOUNT_SUCCESS,
	VERIFY_ACCOUNT_FAILURE,

	AUTH_MESSAGE,
} from '../auth/action-types';

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
				userName: action.payload.userName,
				city: action.payload.city,
				isAuthenticated: true,
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
		case VERIFY_ACCOUNT_FETCH:
			return {
				isCheckVerify: true,
			}
		case VERIFY_ACCOUNT_SUCCESS:
			return {
				isCheckVerify: false,
				isVerify: true,
			}
		case VERIFY_ACCOUNT_FAILURE:
			return {
				isCheckVerify: false,
			}
		default:
			return state;
	}
}

const message = (prevState = {}, action) => {
	switch (action.type) {
		case AUTH_LOGIN_SUCCESS:
		case AUTH_LOGIN_FAILURE:
		case AUTH_SIGNIN_SUCCESS:
		case AUTH_SIGNIN_FAILURE:
		case VERIFY_ACCOUNT_SUCCESS:
		case VERIFY_ACCOUNT_FAILURE:
			return { ...action.payload.message };
		case AUTH_MESSAGE:
			return {};
		default:
			return prevState;
	}
}
export default combineReducers({
	auth: AuthReduser,
	message,
});

