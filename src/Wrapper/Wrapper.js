import React, { useEffect } from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { AuthMessage } from '../Redux/auth/action-creators';
import { Message } from '../Redux/budget/action-creators';
import LogInForm from '../Components/LogInForm';
import HomePage from '../Components/HomePage';
import SigInForm from '../Components/SiginForm';
import PrivateRoute from '../Components/PrivateRoute';
import AuthPage from '../Layouts/AuthPage';
import NotFoundPage from '../Layouts/NotFoundPage';
import NavAuth from '../Layouts/NavAuth';
import SchedulepPage from '../Components/SchedulepPage';
import IncomePage from '../Components/IncomePage';
import ExpensesPage from '../Components/ExpensesPage';
import NavbarCommon from '../Layouts/NavbarCommon';
import Settings from '../Components/Settings';

function Wrapper() {

	const { text, success } = useSelector(({ auth }) => auth.message);
	const { message, type } = useSelector(({ budget }) => budget.messages);
	const dispatch = useDispatch();

	useEffect(() => {
		toast[success ? 'success' : 'error'](text, { onClose: dispatch(AuthMessage()) });
		toast[type ? 'success' : 'error'](message, { onClose: dispatch(Message()) });
	}, [text, message]);

	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			<Router>
				{/* // todo remove duplicate routes  */}
				{/* <NavbarCommon /> */}
				{/* <NavAuth /> */}
				<Switch>
					<Route exact path='/'>
						<NavAuth />
						<AuthPage />
					</Route>
					<Route exact path='/login'>
						<NavAuth />
						<LogInForm />
					</Route>
					<Route exact path='/signin'>
						<NavAuth />
						<SigInForm />
					</Route>
					<PrivateRoute exact path='/homepage'>
						<NavbarCommon />
						<HomePage />
					</PrivateRoute>
					<PrivateRoute exact path='/schedule'>
						<NavbarCommon />
						<SchedulepPage />
					</PrivateRoute>
					<PrivateRoute exact path='/income'>
						<NavbarCommon />
						<IncomePage />
					</PrivateRoute>
					<PrivateRoute exact path='/expenses'>
						<NavbarCommon />
						<ExpensesPage />
					</PrivateRoute>
					<PrivateRoute exact path='/settings'>
						<NavbarCommon />
						<Settings />
					</PrivateRoute>
					<Route>
						<NotFoundPage path='*' />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default Wrapper;
