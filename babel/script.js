import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

class Layout extends React.Component{
	render(){
		return(
			<h1>Hello World!</h1>
		)
	}
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
		</Route>
	</Router>,
	document.getElementById('app')
)