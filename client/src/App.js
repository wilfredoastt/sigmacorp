import React from 'react';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import appTodo from './redux/reducers/index';

import rootSaga from './redux/sagas';
import createSagaMiddleware from 'redux-saga';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { composeWithDevTools } from 'redux-devtools-extension';
import Category from './components/category/Category';
import Product from './components/product/Product';
import ProductDetail from './components/productDetail/ProductDetail';
import Admin from './components/admin/Admin';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	appTodo,
	compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
);

//const store = createStore(appTodo, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/">
						<div className="grid grid-flow-row">
							<Link to="/categories">Categorias</Link>
							<Link to="/admin">Admin</Link>
							<p>Home</p>
						</div>
					</Route>
					<Route exact path="/categories">
						<Category />
					</Route>
					<Route path="/categories/:_id">
						<Product />
					</Route>
					<Route path="/detail/:_id">
						<ProductDetail />
					</Route>
					<Route path="/admin">
						<Admin />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
