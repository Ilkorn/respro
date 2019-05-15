import { createSelector } from 'reselect';
import { pick, values, flatten, uniq, compose, map, pickBy, take } from 'ramda';

import { selectors as filterSelectors } from '../filter';
import { selectors as routerSelector } from '../router';
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
    routerSelector.getMenuInitRaw,
    (menu, menuGroup, filter, notInit) => {
        const {
            mealType = [],
            dishType = [],
        } = filter;
        const ids = extractMenu(menuGroup, mealType);
        const result = compose(
            values,
            pick(ids)
        )(menu);
        if (notInit) return take(1, result);
        return result;

    }
);

export const getListFromBasket = createSelector(
    selectors.getBasketRaw,
    getMenuRaw,
    (isBasket, menu) => compose(
        map((value) => {
            value.inBasket = isBasket[value.id] || 0;
            return value;
        }),
        values,
        pick(Object.keys(pickBy(value => !!value, isBasket)))
    )(menu)
);

// export default {
//     getMenuRaw,
//     getMenuGroupRaw,
//     getMenuWithCounter,
//     getMenuWithFilter,
//     getListFromBasket
// };
