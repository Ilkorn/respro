import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as menuReducer } from './menu'
import { reducer as routerReducer } from './router'
import { reducer as filterReducer } from './filter'
import { reducer as basketReducer } from './basket';

export const reduces = combineReducers({
    menu: menuReducer,
    router: routerReducer,
    filter: filterReducer,
    basket: basketReducer
});

export const initStore = (initialState = {}) => {
    const middlewares = composeWithDevTools(applyMiddleware(thunk));
    const store = createStore(reduces, initialState, middlewares);

    return store;
};
