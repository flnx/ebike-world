import { getUserData } from '../utils/userData.js';
import { createPointer, createPointer2, encodeData } from '../utils/utils.js';
import * as api from './api.js';

const endpoints = {
  create: 'classes/Bike',
  publish: 'classes/Blog',
  articles: 'classes/Blog',
  trendingArticles: 'classes/Blog?skip=0&limit=3',
  like: "classes/Like",
  dislike: (id) => `classes/Like/${id}`,
  count: (path) => `classes/${path}?count=1&limit=0`,
  getByPage: (path, skip, size) => `classes/${path}?skip=${skip}&limit=${size}&order=-createdAt`,
  bikeDetails: (id) => `classes/Bike/${id}`,
  article: (id) => `classes/Blog/${id}`,
  articleLikes: (blogId) => 'classes/Like?where=' + encodeData({blogId: createPointer('Blog', blogId)}),
  articleUserLike: (blogId, userId) => 'classes/Like?where=' + encodeData({"$or":[{"blogId": createPointer('Blog', blogId)}], "ownerId": createPointer('_User', userId)}),
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
    owner: createPointer('_User', user.objectId),
  };

  return await api.post(endpoints.publish, blogData);
};


export const sendLike = async (blogId) => {
  const user = getUserData();

  const data = {
    blogId: createPointer('Blog', blogId),
    ownerId: createPointer('_User', user.objectId),
  }

  return await api.post(endpoints.like, data);
}

export const removeLike = async (blogId) => {
  return await api.del(endpoints.dislike(blogId));
}

export const getBike = async (id) => {
  return await api.get(endpoints.bikeDetails(id));
};

export const createBike = async (data) => {
  const user = getUserData();

  const bikeData = {
    ...data,
    author: user.username,
    owner: createPointer('_User', user.objectId),
  }
  return await api.post(endpoints.create, bikeData);
};

export const getBikesByPage = async (pageSize, currentPage) => {
  let skip = pageSize * (currentPage - 1);
  return await api.get(endpoints.getByPage('Bike', 0, pageSize));
};

export const countAllBikes = async () => {
  return await api.get(endpoints.count('Bike'));
};

// ! needs to be changed when buy functionality is finished
export const getTrendingBikes = async (pageSize, currentPage) => {
  // let skip = pageSize * (currentPage - 1);

  return await api.get(endpoints.getByPage('Bike', 0, pageSize));
};