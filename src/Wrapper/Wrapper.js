import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import LogInForm from '../Components/LogInForm';
import HomePage from '../Components/HomePage';

function Wrapper() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/'>
						<LogInForm />
					</Route>
					<Route exact path='/homepage'>
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default Wrapper;
