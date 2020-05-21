import React, { useState } from 'react';
import Home from './components/Home/Home';
import CodeCreate from './components/CodeCreate/codeCreate';
import Navbar from './components/Navbar/Navbar';
import CodeInfo from './components/CodeInfo/codeInfo';
import CodeEdit from './components/CodeEdit/codeEdit';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
	const [searchString, setSearchString] = useState('');
	const [authToken, setAuthToken] = useState(null);

	return (
		<div className='main'>
			<Route
				path='*'
				render={() => {
					return (
						<Navbar
							searchString={searchString}
							setSearchString={setSearchString}
						/>
					);
				}}
			/>
			<Switch>
				<Route
					exact
					path='/'
					render={() => {
						return (
							<Home
								searchString={searchString}
								setSearchString={setSearchString}
								authToken={authToken}
								setAuthToken={setAuthToken}
							/>
						);
					}}
				/>
				<Route
					path='/create'
					render={() => {
						return <CodeCreate authToken={authToken} />;
					}}
				/>
				<Route
					exact
					path='/code/:id'
					render={(routerProps) => {
						return (
							<CodeInfo
								codeId={routerProps.match.params.id}
								authToken={authToken}
							/>
						);
					}}
				/>
				<Route
					exact
					path='/code/:id/edit'
					render={(routerProps) => {
						return (
							<CodeEdit
								codeId={routerProps.match.params.id}
								authToken={authToken}
							/>
						);
					}}
				/>
			</Switch>
		</div>
	);
}

export default App;
