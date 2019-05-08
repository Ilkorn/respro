import { createSelector } from 'reselect';
import { compose, map, values, reduce, keys, pick, sum } from 'ramda';

export const getBasketRaw = state => state.basket.items;

export const getBasketCount = createSelector(
    getBasketRaw,
    (basket) => sum(values(basket))
);

export const getOrder = createSelector(
    getBasketRaw,
    (basket) => ({
        "type": "takeaway",
        "items": map((value, key) => ({ id: key, count: value }), basket),
        "note": "Заказ из webview"
    })
);

export const getTotalAmount = createSelector(
    getBasketRaw,
    state => state.menu.items,
    // getMenuRaw,
    (basket, menu) =>
        compose(
            reduce((result, item) => result + Number(item.amount * basket[item.id]), 0),
            values,
            pick(keys(basket))
        )(menu)
);

// export default {
//     getBasketRaw,
//     getBasketCount,
//     getTotalAmount
// };
