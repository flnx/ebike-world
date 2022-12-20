import { getUserData } from '../utils/userData.js';
import { createPointer } from '../utils/utils.js';
import * as api from './api.js';

const endpoints = {
  create: 'classes/Bike',
  getAll: 'classes/Bike',
  getOne: (id) => `classes/Bike/${id}`,
  publish: 'classes/Blog',
  article: (id) => `classes/Blog/${id}`,
  articles: 'classes/Blog',
  trendingArticles: 'classes/Blog?skip=0&limit=3',
  count: (path) => `classes/${path}?count=1&limit=0`,
  getByPage: (path, skip, size) => `classes/${path}?skip=${skip}&limit=${size}&order=-createdAt`,
  like: "classes/Like",
  dislike: (id) => `classes/Like/${id}`,
  articleLikes: (blogId) => 'classes/Like?where=' + encodeURIComponent(`{"blogId":${createPointer('Blog', blogId)}}`),
  articleUserLike: (blogId, userId) => 'classes/Like?where=' + encodeURIComponent(`{"$or":[{"blogId": ${createPointer('Blog', blogId)}}], "ownerId": ${createPointer('_User', userId)}}`),
};

export const getArticle = async (id) => {
  return await api.get(endpoints.article(id));
};

export const getArticles = async () => {
  return await api.get(endpoints.articles);
};

export const getTrendingArticles = async () => {
  return await api.get(endpoints.trendingArticles);
};

export const getArticlesByPage = async (pageSize, currentPage) => {
  let skip = pageSize * (currentPage - 1);

  return await api.get(endpoints.getByPage('Blog', skip, pageSize));
};

export const countAllArticles = async () => {
  return await api.get(endpoints.count('Blog'));
};


export const getArticleLikes = async (blogId) => {
  return await api.get(endpoints.articleLikes(blogId));
}

export const getArticleUserLike = async (blogId) => {
  const user = getUserData();
  return await api.get(endpoints.articleUserLike(blogId, user.objectId));
}

export const createBlogPost = async (data) => {
  const user = getUserData();

  const blogData = {
    ...data,
    author: user.username,
    owner: { __type: 'Pointer', className: '_User', objectId: user.objectId },
  };

  return await api.post(endpoints.publish, blogData);
};


export const sendLike = async (blogId) => {
  const user = getUserData();

  const data = {
    "blogId": { "__type": "Pointer", "className": "Blog", "objectId": blogId },
    "ownerId": { "__type": "Pointer", "className": "_User", "objectId": user.objectId }
  }

  return await api.post(endpoints.like, data);
}

export const removeLike = async (blogId) => {
  return await api.del(endpoints.dislike(blogId));
}

export const getBike = async (id) => {
  return await api.get(endpoints.getOne(id));
};

export const createBike = async (data) => {
  const user = getUserData();

  const bikeData = {
    ...data,
    author: user.username,
    owner: { __type: 'Pointer', className: '_User', objectId: user.objectId },
  }
  return await api.post(endpoints.create, bikeData);
};

export const getBikes = async () => {
  return await api.get(endpoints.getAll);
};

export const getTotalBikes = async () => {
  return await api.get(endpoints.count('Bike'));
};


export const getTrendingBikes = async (pageSize, currentPage) => {
  // let skip = pageSize * (currentPage - 1);

  return await api.get(endpoints.getByPage('Bike', 0, pageSize));
};