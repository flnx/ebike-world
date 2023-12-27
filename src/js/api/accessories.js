import * as api from './api.js';

const endpoints = {
    url: (path) => `classes/${path}`,
};

export const getHelmets = async () => {
    const result = await api.get(endpoints.url('Helmet'));

    return result;
};
