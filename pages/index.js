
import React from 'react';

import Tiles from '../components/tiles';
import Toolbar from '../components/toolbar';
// import List from '../components/list';
// import { List } from '../components/view';
import { ViewManager } from '../components/view';
import { getMenu } from '../utils/api';
import { actions } from '../data/menu';
import { selectors } from '../data/router';

class MenuPage extends React.Component {
    static async getInitialProps({ req, store }) {
        let menu = {};
        try {
            menu = await getMenu();
            const action = actions.setMenu(menu.data);
            store.dispatch(action);
        } catch(e) {
            console.log(e);
        }

        return { menu: selectors.getMenu(store.getState()) };
    }

    render() {
        const { menu: isMenuOpen } = this.props;
        return (
            <div style={{height: '100vh', overflow: isMenuOpen ? 'hidden' : 'auto' }}>
                <ViewManager />
                <Tiles />
                <Toolbar />
            </div>
        );
    }
}

export default MenuPage;
