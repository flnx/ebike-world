const url = 'https://parseapi.back4app.com/classes/';

const request = async (method, path, data) => {
  const config = {
    method,
    headers: {
      'X-Parse-Application-Id': 'SZx0IVQSNq6aqVUOA7ADrONUJ0UntFIZ0swFEB7I',
      'X-Parse-REST-API-Key': 'fN8ZDNOpV3Fpg8tfuZupd07B7aMhH1ICdIdkNvcM',
      'content-type': 'application/json',
    },
  };

  if (data !== undefined) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url + path, config);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }

  } catch (err) {
    alert(err.message);
    throw err;
  }
};

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
  get, post, put,del
}