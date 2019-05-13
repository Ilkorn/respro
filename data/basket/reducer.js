import { lensPath, set, compose, pickBy, over } from 'ramda';
import { types } from './actions'


export const initState = {
    items: {}
};

const select = {
    items: id => lensPath(['items', id]),
    itemsPure: lensPath(['items'])
};

export default (state = initState, action) => {
    switch(action.type) {
        case(types.BASKET_ADD):
            return over(
                select.items(action.payload),
                (value = 0) => (value + 1),
                state
            );
        case(types.BASKET_REMOVE):
            return compose(
                pickBy(value => value),
                over(
                    select.items(action.payload),
                    (value = 1) => {
                        if (value < 1) value = 1;
                        return (value - 1)
                    }
                )
            )(state);
        case(types.BASKET_RESET):
        case(types.BASKET_POST):
            return set(select.itemsPure, {}, state)
    }

    return state;
};
