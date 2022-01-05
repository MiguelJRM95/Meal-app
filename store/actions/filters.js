export const SET_FILTERS = 'SET_FILTER';

export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings };
}