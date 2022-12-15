import { getUserData } from '../utils/userData.js';
import * as api from './api.js';

const endpoints = {
  create: 'classes/Bike',
  getAll: 'classes/Bike',
  getOne: (id) => `classes/Bike/${id}`,
  publish: 'classes/Blog',
  article: (id) => `classes/Blog/${id}`,
  articles: 'classes/Blog',
};

export const getBike = async (id) => {
  return await api.get(endpoints.getOne(id));
};

export const createBike = async (bikeData) => {
  return await api.post(endpoints.create, bikeData);
};

export const getBikes = async () => {
  return await api.get(endpoints.getAll);
};

export const createBlogPost = async (data) => {
  const user = getUserData();

  const blogData = {
    ...data,
    author: user.username,
    owner: { __type: 'Pointer', className: '_User', objectId: user.objectId },
  };

  return await api.post(endpoints.publish, blogData);
};

export const getArticle = async (id) => {
  return await api.get(endpoints.article(id));
};

export const getArticles = async () => {
  return await api.get(endpoints.articles);
};
