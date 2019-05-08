import { schema } from 'normalizr';

export const menuSchema = new schema.Entity('menu');
export const menuSchemas = [menuSchema];

export default {
    menuSchema,
    menuSchemas
};
