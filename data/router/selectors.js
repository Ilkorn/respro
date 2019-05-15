import { createSelector } from 'reselect';

export const getViewRaw = state => state.router.view;
export const getMenuRaw = state => state.router.menu;
export const getMenuInitRaw = state => state.router.init;

export const getView = createSelector(
    getViewRaw,
    view => view
);

export const getMenu = createSelector(
    getMenuRaw,
    menu => menu
);
