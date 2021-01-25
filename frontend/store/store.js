import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const middlewares = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== "production") {
	// must use "require", import only allowed at top of file
	const { logger } = require("redux-logger");
	middlewares.push(logger);
}

const configureStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(...middlewares),
		// applyMiddleware(thunk, logger)
		// composeEnhancers(
		// 	applyMiddleware(...middlewares)
		// ),
		// composeWithDevTools(
			applyMiddleware(...middlewares)
		// )
  );

export default configureStore;
