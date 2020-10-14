import React, { useEffect } from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { CloseMessage } from '../Redux/action-creators';
import LogInForm from '../Components/LogInForm';
import HomePage from '../Components/HomePage';
import SigInForm from '../Components/SiginForm';
import AuthPage from '../Layouts/AuthPage';
import NotFoundPage from '../Layouts/NotFoundPage';
import NavAuth from '../Layouts/NavAuth';
import SchedulepPage from '../Components/SchedulepPage';
import IncomePage from '../Components/IncomePage';
import ExpensesPage from '../Components/ExpensesPage';
import NavbarCommon from '../Layouts/NavbarCommon';

function Wrapper() {
	const { text, success } = useSelector(({ message }) => message);
	const dispatch = useDispatch();

	useEffect(() => {
		toast[success ? 'success' : 'error'](text, { onClose: dispatch(CloseMessage()) })
	}, [text]);
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
					<Route exact path='/homepage'>
						<NavbarCommon />
						<HomePage />
					</Route>
					<Route exact path='/schedule'>
						<NavbarCommon />
						<SchedulepPage />
					</Route>
					<Route exact path='/income'>
						<NavbarCommon />
						<IncomePage />
					</Route>
					<Route exact path='/expenses'>
						<NavbarCommon />
						<ExpensesPage />
					</Route>
					<Route>
						<NotFoundPage path='*' />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default Wrapper;
