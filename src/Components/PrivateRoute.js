import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, ...rest }) {

	const { isAuthenticated } = useSelector(({ auth }) => auth);
	return (
		isAuthenticated ? (<Route {...rest}> {children} </Route>) : (<Redirect to='/login' />)
	)
}

export default PrivateRoute;
