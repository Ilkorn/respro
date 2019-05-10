import { createSelector } from 'reselect';
import { pick, values, flatten, uniq, compose, map, pickBy } from 'ramda';

import { selectors as filterSelectors } from '../filter';
import { selectors } from '../basket';

export const getMenuRaw = state => state.menu.items;
export const getMenuGroupRaw = state => state.menu.group;

const extractMenu = (menuGroup = {}, type) => compose(
    uniq,
    flatten,
    values,
    pick(type)
)(menuGroup);

export const getMenuWithCounter = createSelector(
    getMenuRaw,
    selectors.getBasketRaw,
    (menu, inBasket) => {
        const res = map(
            (value) => {
                value.inBasket = inBasket[value.id] || 0;
                return value;
            },
            menu
        );

        return res;
    }
);

export const getMenuWithFilter = createSelector(
    getMenuWithCounter,
    getMenuGroupRaw,
    filterSelectors.getFilter,
    (menu, menuGroup, filter) => {
        const {
            mealType = [],
            dishType = [],
        } = filter;
        const ids = extractMenu(menuGroup, mealType);
        return compose(
            values,
            pick(ids)
        )(menu);
    }
);

export const getListFromBasket = createSelector(
    selectors.getBasketRaw,
    getMenuRaw,
    (isBasket, menu) => {
        const items = compose(
            map((value) => {
                value.inBasket = isBasket[value.id] || 0;
                return value;
            }),
            values,
            pick(Object.keys(isBasket)),
            pickBy(value => { console.log('aaaa', value); return !!value;})
        )(menu);
        console.log('items', items);
        return items;
    }
);

// export default {
//     getMenuRaw,
//     getMenuGroupRaw,
//     getMenuWithCounter,
//     getMenuWithFilter,
//     getListFromBasket
// };
