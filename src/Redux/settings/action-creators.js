import axios from 'axios';
import { API_URI } from '../../Consts/consts';
import {
	// *City
	PATCH_CITY_FETCH,
	PATCH_CITY_SUCCESS,
	PATCH_CITY_FAILURE,

} from './action-types';

// *City
export const patchCityFetch = (city) => (dispatch, getStore) => {
	console.log('city', city);
	dispatch({
		type: PATCH_CITY_FETCH,
	})
	const { auth } = getStore();
	axios.patch(`${API_URI}/city`, { city }, {
		headers: {
			'Authorization': auth && auth.auth.token,
		}
	})
		.then(res => dispatch(patchCitySuccess(res.data)))
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