import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer as oidc } from "@axa-fr/react-oidc-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import * as reducers from "../reducers";

// import { createBrowserHistory } from "history";

const rootReducer = combineReducers({
  oidc,
  ...reducers.configAppReducer,
});

const isDevelopment = process.env.REACT_APP_IS_DEV;

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

// export const history = createBrowserHistory({ window: baseUrl });

export const configureStore = () => {
  const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

  const store = createStore(rootReducer, composeEnhancers);

  return { store };
};

// compose(applyMiddleware(thunk, routerMiddleware(history)))
