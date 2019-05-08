import { lensProp, set } from 'ramda';
import { types } from './actions';

export const initialState = {
    view: 'list',
    menu: true
}

const select = {
    view: lensProp('view'),
    menu: lensProp('menu')
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_VIEW:
            return set(select.view, action.payload, state);
        case types.TOGGLE_MENU:
            return set(select.menu, !state.menu, state);
        case types.OPEN_MENU:
            return set(select.menu, action.payload, state);
    }

    return state;
};
