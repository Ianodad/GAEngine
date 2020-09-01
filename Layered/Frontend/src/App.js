import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home'
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<ToastContainer />
				<main className="container">
					<Switch>
						<Route path="/" component={Home} /> 
s						<Redirect from="/" exact to="/" />
						<Redirect to="/not-found" />
					</Switch>{' '}
				</main>{' '}
			</React.Fragment>
		);
	}
}

export default App;