import {combineReducers, createStore, applyMiddleware} from "redux";
import reducerPasswordRecovery from './passwordRecoveryReducer'
import reducerRegistration from './registrationReducer'
import reducerLogin from './loginReducer'
import thunkMiddleware from "redux-thunk";
import reducerProfile from "./profileReducer";


const rootReducer = combineReducers({
    login: reducerLogin,
    registration: reducerRegistration,
    password: reducerPasswordRecovery,
    profile: reducerProfile
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store