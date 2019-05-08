import axios from 'axios';

const API_KEY = 'bc6b438d4b23492b8b43041f4fe84951';
const API_BASE = 'https://rc-chat.animalfarm.by/api';
const TEST_TOKEN = '8a86a36840f04e808a674816b4217ea4cccb80fc';

const baseProfile = {
    baseURL: API_BASE,
    // timeout: 1000,
    headers: {'X-Animalfarm-Api-Key': API_KEY}
};

const api = axios.create(baseProfile);

export const getMenu = () => api.get('/items');
export const postOrder = (payload, token = TEST_TOKEN) => {
    console.log('object', JSON.stringify(payload));
    return api.post(`/order/${token}`, JSON.stringify(payload), baseProfile);
}

export default {
    getMenu,
    postOrder
};
