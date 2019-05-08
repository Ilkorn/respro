import { connect } from 'react-redux';

import { selectors } from '../../data/menu';
import { actions } from '../../data/basket';

export default connect(
    state => ({
        items: selectors.getListFromBasket(state)
    }),
    dispatch => ({
        handleAddDish: id => dispatch(actions.addToBasket(id)),
        handleRemoveDish: id => dispatch(actions.removeFromBasket(id))
    })
);
