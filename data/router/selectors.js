import { createSelector } from 'reselect';

export const getViewRaw = state => state.router.view;
export const getView = createSelector(
    getViewRaw,
    view => view
);
