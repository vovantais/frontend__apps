import { combineReducers } from 'redux';
import auth from '../Redux/auth/reducers';
import budget from '../Redux/budget/reducers';
import sort from '../Redux/sort/reducers';
import settings from '../Redux/settings/reducers';

export default combineReducers({
	auth,
	budget,
	sort,
	settings,
});