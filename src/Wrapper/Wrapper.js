import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import LogInForm from '../Components/LogInForm';
import HomePage from '../Components/HomePage';
import AuthPage from '../Components/AuthPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { CloseMessage } from '../Redux/action-creators';
import SigInForm from '../Components/SiginForm';


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
						<AuthPage />
					</Route>
					<Route exact path='/login'>
						<LogInForm />
					</Route>
					<Route exact path='/signin'>
						<SigInForm />
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
