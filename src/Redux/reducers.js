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

	CLOSE_MESSAGE,
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
		case CLOSE_MESSAGE:
			return {};
		default:
			return prevState;
	}
}
const reducers = combineReducers({
	auth: AuthReduser,
	message,
});

export default reducers;
