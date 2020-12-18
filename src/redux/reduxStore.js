import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk" 
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";
const { createStore, combineReducers, applyMiddleware,compose } = require("redux");


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer, //E Echibalent cu: dialogsReducer:dialogsReducer,
    navbarComponent: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));
window.store=store;

//let store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;