import axios from 'axios';
import Auth from './auth0';

const auth = new Auth();

function getIdToken() {
  const idToken = localStorage.getItem('id_token');
  return idToken;
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
    const token = getIdToken();
    if (!token) {
      throw new Error('ID token not found');
    }
    if (token && !auth.isAuthenticated()) {
      localStorage.removeItem('id_token');
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_at');
      window.location = '/';
      throw new Error('Token is expired');
    }
    config.headers.common['Authorization'] = `Bearer ${token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

const makeFetchRequest = async (url) => {
  return await fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getIdToken()}`,
    },
    redirect: 'follow',
  });
};

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
  getFetch: makeFetchRequest,
};
