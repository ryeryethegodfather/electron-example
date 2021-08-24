import React from 'react'
import ReactDOM from 'react-dom'
// code
//import * as serviceWorker from './serviceWorker'
// components
import Landing from './Render/Components/Landing/Landing';
//import { RootStoreContext} from './stores/RootStore'
import {Router, Route} from 'react-router-dom';
import history from './Render/Helpers/history';
//import AddRemove from './Render/Components/AddRemove/AddRemove';



// try to use hash history with generic Router
// can try browser router with generic router?
// 	{/*<RootStoreContext.Provider value={rootStore}> */}
// {/*</RootStoreContext.Provider> */}
export default ReactDOM.render(
	
		<Router history={history}>
			<Route component={Landing} exact path="/"/>
			
		</Router>
	,
	document.body
);