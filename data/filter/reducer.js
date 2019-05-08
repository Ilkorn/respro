import { lensPath, set, compose, uniq, concat } from 'ramda';
import { types } from './actions'


export const initState = {
    items: {
        mealType: ['#breakfast']
    }
};

const select = {
    filter: filterName => lensPath(['items', filterName]),
    items: lensPath(['items'])
};

export default (state = initState, action) => {
    switch(action.type) {
        case(types.FILTER_SET): return set(
            select.filter(action.payload.type),
            action.payload.value,
            state
        );
        case(types.FILTER_UPDATE): return over(
            select.filter(action.payload.type),
            value => uniq(concat(value, action.payload.value)),
            state
        );
        case(types.FILTER_RESET): return set(
            select.filter(action.payload.type),
            [],
            state
        );
        case(types.FILTER_RESET_ALL): return set(select.items, {}, state)
    }

    return state;
};
