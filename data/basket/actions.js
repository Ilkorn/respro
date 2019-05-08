import { getOrder } from './selectors';
import api from '../../utils/api';

export const types = {
    BASKET_ADD: 'BASKET_ADD',
    BASKET_REMOVE: 'BASKET_REMOVE',
    BASKET_RESET: 'BASKET_RESET',
    BASKET_POST: 'BASKET_POST'
};

export const addToBasket = menuId => ({
    type: types.BASKET_ADD,
    payload: menuId
});

export const removeFromBasket = menuId => ({
    type: types.BASKET_REMOVE,
    payload: menuId
});

export const resetBasket = () => ({
    type: types.BASKET_RESET
});

// with side effect
export const postBasket = () => (dispatch, getState) => {
    dispatch({ type: types.BASKET_POST });
    api.postOrder(getOrder(getState()))
        .then((resp) => {
            dispatch(resetBasket());
        });
};

export default {
    addToBasket,
    removeFromBasket,
    resetBasket,
    postBasket
};
