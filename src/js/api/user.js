import * as api from './api.js'

const endpoints = {
  register: 'users',
  login: 'login',
}

export const register = async(data) => {
  return await api.post(endpoints.register(id), data);
}

export const login = async(data) => {
  return await api.post(endpoints.login(id), data);
}