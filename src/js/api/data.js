import * as api from './api.js'

const endpoints = {
  create: 'Bike',
  getAll: 'Bike'
}

export const createBike = async(bikeData) => {
  return await api.post(endpoints.create, bikeData);
}

export const getBikes = async() => {
  return await api.get(endpoints.getAll);
}