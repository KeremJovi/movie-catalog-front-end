import api from '..';

export const getMovies = (params) => {
  return api.get('/movie/find/', {
    params,
  });
};

export const getDetails = (id) => {
  return api.get(`/movie/${id}`);
};

export const updateDatabase = () => {
  return api.get('/movie/');
};
