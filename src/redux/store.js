import { configureStore} from '@reduxjs/toolkit';
import { combineReducers } from "redux"; 
import loginReducer from "./reducers/loginReducer";
import themeReducer from "./reducers/themeReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import colorReducer from './reducers/colorReducer';

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const rootReducer = combineReducers({
    login : loginReducer, 
    theme : themeReducer,
    color : colorReducer,
}) ;

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
});

export default store;