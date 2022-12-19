import { clearUserData, setUserData } from '../utils/userData.js';
import * as api from './api.js';

const endpoints = {
  register: 'users',
  login: 'login',
  logout: 'logout',
};

// data: username, email, password
export const register = async (data) => {
  const { sessionToken, objectId } = await api.post(endpoints.register, data);

  const userData = {
    email: data.email,
    username: data.username,
    objectId,
    sessionToken,
  };

  setUserData(userData);
};

// data: email, password
export const login = async (data) => {
  const { username, objectId, sessionToken } = await api.post(endpoints.login, data);

  const userData = {
    email: data.email,
    username,
    objectId,
    sessionToken,
  };

  setUserData(userData);
};

export const logout = async() => {
  api.post(endpoints.logout);
  clearUserData()
}
