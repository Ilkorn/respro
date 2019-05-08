
import React from 'react';

import Tiles from '../components/tiles';
import Toolbar from '../components/toolbar';
// import List from '../components/list';
// import { List } from '../components/view';
import { ViewManager } from '../components/view';
import { getMenu } from '../utils/api';
import { actions } from '../data/menu';

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

        return { };
    }

    render() {
      return (
        <div style={{height: '100vh'}}>
            <ViewManager />
            <Tiles />
            <Toolbar />
        </div>
      )
    }
}

export default MenuPage;
