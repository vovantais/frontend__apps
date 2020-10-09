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
import HomePage from '../Layouts/HomePage';
import SigInForm from '../Components/SiginForm';
import AuthPage from '../Layouts/AuthPage';
import NotFoundPage from '../Layouts/NotFoundPage';
import NavAuth from '../Layouts/NavAuth';

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
						<HomePage />
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
