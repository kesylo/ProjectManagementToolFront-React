import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"

/* set application initial state */
const initialState = {};
const middleWare = [thunk];

let store;

/* configure store to work with multiple browsers*/
if (window.navigator.userAgent.includes("Chrome")){
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
} else { /* if not chrome, create generic store */
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleWare)
        )
    );
}

export default store;