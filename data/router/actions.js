export const types = {
    'CHANGE_VIEW': 'CHANGE_VIEW',
    'TOGGLE_MENU': 'TOGGLE_MENU',
    'OPEN_MENU': 'OPEN_MENU'
};

export const changeView = (viewName) => ({ type: types.CHANGE_VIEW, payload: viewName });
export const toggleMenu = () => ({ type: types.TOGGLE_MENU });
export const openMenu = (value) => ({ type: types.OPEN_MENU, payload: value });

export default {
    changeView,
    toggleMenu,
    openMenu
};
