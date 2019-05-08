export const types = {
    FILTER_SET: 'FILTER_SET',
    FILTER_UPDATE: 'FILTER_UDPATE',
    FILTER_RESET: 'FILTER_RESET',
    FILTER_RESET_ALL: 'FILTER_RESET_ALL'
};

export const setFilter = filter => ({
    type: types.FILTER_SET,
    payload: filter
});

export const updateFilter = filter => ({
    type: types.FILTER_UPDATE,
    payload: filter
});

export const resetFilter = filter => ({
    type: types.FILTER_RESET,
    payload: filter
});

export const resetAllFilter = () => ({ type: types.FILTER_RESET_ALL });

export default {
    setFilter,
    updateFilter,
    resetFilter,
    resetAllFilter
};
