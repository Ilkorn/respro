import { createElement } from 'react';
import { compose, branch, renderNothing, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { selectors, actions } from '../../data/router';
import Overlay from '../overlay';
import List from './list';
import Basket from './basket';

const map = {
    list: List,
    basket: Basket
};

export default compose(
    connect(
        state => ({
            viewName: selectors.getView(state)
        }),
        dispatch => ({
            toggleMenu: () => dispatch(actions.toggleMenu())
        })
    ),
    branch(props => !map[props.viewName], renderNothing),
    renderComponent(props => (
        <>
            <Overlay onClick={() => props.toggleMenu()} />
            {createElement(map[props.viewName])}
        </>
    ))
)();


