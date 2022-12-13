import * as api from './api.js'

const endpoints = {
  create: 'Bike',
  getAll: 'Bike',
  getOne: (id) => `Bike/${id}`
}

export const getBike = async(id) => {
  return await api.get(endpoints.getOne(id));
}

export const createBike = async(bikeData) => {
  return await api.post(endpoints.create, bikeData);
}

export const getBikes = async() => {
  return await api.get(endpoints.getAll);
}