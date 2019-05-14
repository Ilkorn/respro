import { normalize } from 'normalizr';
import { schema } from '../menu';

export const types = {
    SET_MENU: 'SET_MENU',
    GET_MENU: 'GET_MENU'
}

export const setMenu = (items) => {
    const res = items.reduce(
        (res, item) => {
            const newItem = {...item, isVegan: false, isSpicy: false};
            item.tags.forEach((tag) => {
                if (!res.group[tag.code]) res.group[tag.code] = [];
                if (!res.group[tag.parent]) res.group[tag.parent] = [];
                if (!newItem.isVegan && (tag.code === '#veg' || tag.parent === '#veg'))
                    newItem.isVegan = true;
                if (!newItem.isSpicy && (tag.code === '#hot' || tag.parent === '#hot'))
                    newItem.isSpicy = true;
                res.group[tag.code].push(item.id);
                res.group[tag.parent].push(item.id);
            });
            res.items.push(newItem);
            return res;
        },
        { group: {}, items: [] }
    );

    const result = normalize(res.items, schema.menuSchemas);

    return ({ type: types.SET_MENU, payload: result.entities.menu, meta: { group: res.group } });
};

export default {
    setMenu
};
