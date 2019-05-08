import { lensProp, set, compose } from 'ramda';
import { types } from './actions'


export const initState = {
    items: {}
};

const select = {
    items: lensProp('items'),
    group: lensProp('group')
};

export default (state = initState, action) => {
    switch(action.type) {
        case(types.SET_MENU):
            return compose(
                set(select.group, action.meta.group),
                set(select.items, action.payload)
            )(state);
    }

    return state;
};
