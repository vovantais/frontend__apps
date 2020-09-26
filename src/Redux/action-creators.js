import axios from 'axios';
import { API_URI } from '../Consts/consts';
import {
	AUTH_SIGNIN_FETCH,
	AUTH_SIGNIN_SUCCESS,
	AUTH_SIGNIN_FAILURE,

	AUTH_LOGIN_FETCH,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE
} from './action-types';

//  * Auth Sign In
export const AuthSignInFetch = (sigInPyload) => (dispatch) => {
	dispatch({
		type: AUTH_SIGNIN_FETCH,
	})
	axios.post(`${API_URI}/Signin`, { ...sigInPyload })
		.then(res => dispatch(AuthSignInSuccess(res.data)))
		.catch(err => dispatch(AuthSignInFail(err.data)))

};
export const AuthSignInSuccess = (payload) => ({
	type: AUTH_SIGNIN_SUCCESS,
	payload,
});
export const AuthSignInFail = (payload) => ({
	type: AUTH_SIGNIN_FAILURE,
	payload,
});

// * Auth Log In 

export const AuthLogInFetch = (loginPayload) => (dispatch) => {
	dispatch({
		type: AUTH_LOGIN_FETCH,
	})
	axios.post(`${API_URI}/Login`, { ...loginPayload })
		.then(res => dispatch(AuthLogInSuccess(res.data)))
		.catch(err => dispatch(AuthLogInFail(err.data)))
};
export const AuthLogInSuccess = (payload) => ({
	type: AUTH_LOGIN_SUCCESS,
	payload,
});
export const AuthLogInFail = (payload) => ({
	type: AUTH_LOGIN_FAILURE,
	payload,
});
