import { normalize } from 'normalizr';
import { schema } from '../menu';

export const types = {
    SET_MENU: 'SET_MENU',
    GET_MENU: 'GET_MENU'
}

export const setMenu = (items) => {
    const group = items.reduce(
        (group, { id, tags }) => {
            tags.forEach((tag) => {
                if (!group[tag.code]) group[tag.code] = [];
                if (!group[tag.parent]) group[tag.parent] = [];
                group[tag.code].push(id);
                group[tag.parent].push(id);
            });
            return group;
        },
        {}
    );
    const result = normalize(items, schema.menuSchemas);

    return ({ type: types.SET_MENU, payload: result.entities.menu, meta: { group } });
};

export default {
    setMenu
};
