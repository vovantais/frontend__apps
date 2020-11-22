import { combineReducers } from 'redux';

import {
	// *City
	PATCH_CITY_FETCH,
	PATCH_CITY_SUCCESS,
	PATCH_CITY_FAILURE,

} from './action-types';

const settings = (prevState = {}, action) => {
	const { ...newState } = prevState;
	switch (action.type) {
		case PATCH_CITY_FETCH:
			return prevState;
		case PATCH_CITY_SUCCESS:
		case PATCH_CITY_FAILURE:
			return prevState;
		default:
			return prevState;
	}
}

export default combineReducers({
	settings,
});