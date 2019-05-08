import { connect } from 'react-redux';

import { selectors, actions } from '../../data/basket';

export default connect(
    state => ({
        totalAmount: selectors.getTotalAmount(state),
        isReadyToConfirm: !!selectors.getTotalAmount(state)
    }),
    dispatch => ({
        handleConfirm: () => dispatch(actions.postBasket())
    })
);
