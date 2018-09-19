import axios from 'axios';
import humps from 'humps';

import config from '../../../config';

const instance = axios.create({
  baseURL: config.baseUrl,
  headers: { 'Content-Type': 'application/json' },
});

export default (params) => {
  const { data } = params;
  return instance({
    ...data,
  })
    .then((response) => {
      return humps.camelizeKeys(response);
    })
    .catch((error) => {
      const { statusText, status } = error.response || {};

      const errorObj = { statusText, status, response: error.response };
      throw errorObj;
    });
};
