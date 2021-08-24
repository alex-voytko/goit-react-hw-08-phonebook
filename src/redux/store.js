import { contactsReducer } from './contacts';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { authReducer } from './auth';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: authReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// const persistor = store;

export default store;
