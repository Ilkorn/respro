import { compose, lensProp, set } from 'ramda';
import { types } from './actions';

export const initialState = {
    view: 'list',
    menu: true,
    init: true
}

const select = {
    view: lensProp('view'),
    menu: lensProp('menu'),
    init: lensProp('init')
};

const setInitialized = set(select.init, false);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_VIEW:
            return compose(
                setInitialized,
                set(select.view, action.payload)
            )(state);

        case types.TOGGLE_MENU:
            return compose(
                setInitialized,
                set(select.menu, !state.menu)
            )(state);

        case types.OPEN_MENU:
            return compose(
                setInitialized,
                set(select.menu, action.payload)
            )(state);
    }

    return state;
};
