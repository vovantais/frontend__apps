import axios from 'axios';
import { API_URI } from '../../Consts/consts';
import {
	//* NANE
	PATCH_NAME_FETCH,
	PATCH_NAME_SUCCESS,
	PATCH_NAME_FAILURE,
	// *City
	PATCH_CITY_FETCH,
	PATCH_CITY_SUCCESS,
	PATCH_CITY_FAILURE,

	//*Message
	SETTINGS_MESSAGE,
} from './action-types';



export const patchCityFetch = (city) => (dispatch, getStore) => {
	dispatch({
		type: PATCH_CITY_FETCH,
	})
	const { auth } = getStore();
	axios.patch(`${API_URI}/city`, { city }, {
		headers: {
			'Authorization': auth && auth.auth.token,
		}
	})
		.then(res => dispatch(patchCitySuccess({
			city: res.data.city,
			message: res.data.message,
		})))
		.catch(err => dispatch(patchCityFail(err.response.data)))
}

export const patchCitySuccess = (payload) => ({
	type: PATCH_CITY_SUCCESS,
	payload,
});

export const patchCityFail = (payload) => ({
	type: PATCH_CITY_FAILURE,
	payload,
});

export const patchNameFetch = (name) => (dispatch, getStore) => {
	console.log(name);
	dispatch({
		type: PATCH_NAME_FETCH,
	})
	const { auth } = getStore();
	axios.patch(`${API_URI}/name`, { name }, {
		headers: {
			'Authorization': auth && auth.auth.token,
		}
	})
		.then(res => dispatch(patchNameSuccess({
			name: res.data.name,
			message: res.data.message,
		})))
		.catch(err => dispatch(patchNameFail(err.response.data)))
}

export const patchNameSuccess = (payload) => ({
	type: PATCH_NAME_SUCCESS,
	payload,
});

export const patchNameFail = (payload) => ({
	type: PATCH_NAME_FAILURE,
	payload,
});

// * Message
export const settingsMessage = () => ({
	type: SETTINGS_MESSAGE,
});