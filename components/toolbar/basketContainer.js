import { connect } from 'react-redux';
import { selectors } from '../../data/basket';
import { actions } from '../../data/router';

export default connect(
    state => ({
        itemsCount: selectors.getBasketCount(state),
        disabled: !selectors.getBasketCount(state)
    }),
    dispatch => ({
        handleOpenBasket: () => dispatch(actions.changeView('basket'))
    })
);
