import { getUserData } from "../utils/userData";


const host = 'https://parseapi.back4app.com/'
const APP_ID = 'SZx0IVQSNq6aqVUOA7ADrONUJ0UntFIZ0swFEB7I';
const API_KEY = 'fN8ZDNOpV3Fpg8tfuZupd07B7aMhH1ICdIdkNvcM'


const request = async (method, url = '/', data) => {
  const config = {
    method,
    headers: {
      'X-Parse-Application-Id': APP_ID,
      'X-Parse-REST-API-Key': API_KEY,
      'content-type': 'application/json',
    },
  };

  if (data !== undefined) {
    config.body = JSON.stringify(data);
  }

  const user = getUserData();

  if (user) {
    options.headers['X-Parse-Session-Token'] = userData.sessionToken;
  }

  try {
    const response = await fetch(host + url, config);

    if (response.status == 204) {
      return response;
    } 

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || result.error);
    }

    return result;

  } catch (err) {
    alert(err.message);
    throw err;
  }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');