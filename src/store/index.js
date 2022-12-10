/**
 * @file store.js
 * Sets up the global (state) by combining containers reducers
 */
import {
    Reducer as ViewStateReducer,
    getInitialState as getInitialViewState,
} from "./viewState";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer  = combineReducers({
    viewState: ViewStateReducer,
});

const rehydrater = () => {
    const initialState = {
        viewState: getInitialViewState(),
    };

    return initialState;
};

export const Store = configureStore({
    reducer: rootReducer,
    /**
     * The immutableCheck and serializableCheck drastically slowed down performance in development.
     * These middleware performed deep checks on the state for every action. We should be able to guarantee
     * immutability through the use of immer and TS, though serializability checks would be beneficial if
     * performed during random state updates
     *
     * @param {Function} getDefaultMiddleware
     * @returns {Function} middleware
     */
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
    preloadedState: rehydrater()
});
