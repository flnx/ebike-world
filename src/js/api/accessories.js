import * as api from './api.js';

const endpoints = {
    url: (path) => `classes/${path}`,
};

export const getAccessories = async (path) => {
    const result = await api.get(endpoints.url(path));

    return result;
};