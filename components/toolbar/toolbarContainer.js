import { connect } from 'react-redux';

import { actions, selectors } from '../../data/router';

export default connect(
    state => ({
        viewName: selectors.getView(state)
    }),
    dispatch => ({
        handleToggleMenu: () => dispatch(actions.toggleMenu())
    })
);
