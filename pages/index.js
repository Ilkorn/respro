
import React, { createElement } from 'react';
import { connect } from 'react-redux';

import Tiles from '../components/tiles';
import Toolbar from '../components/toolbar';
import { ViewManager } from '../components/view';
import { getMenu } from '../utils/api';
import { actions } from '../data/menu';
import { selectors } from '../data/router';

const PageContent = ({ isMenuOpen }) => (
    <div style={{height: '100vh', overflow: 'auto' }}>
        <ViewManager />
        <Tiles />
        <Toolbar />
    </div>
);

class MenuPage extends React.Component {
    static async getInitialProps({ req, store }) {
        let menu = {};
        try {
            menu = await getMenu();
            const action = actions.setMenu(menu.data);
            store.dispatch(action);
        } catch(e) {
            if (e.response) {
                console.error(e.response.status, e.response.statusText);
            } else {
                console.error(e);
            }
        }

        return { menu: selectors.getMenu(store.getState()) };
    }

    render() {
        return <PageContent />;
    }
}

export default MenuPage;
