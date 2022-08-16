import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (builder) => ({
    // Get Movies by [Type]
    getMovies: builder.query({
      query: () => {
        return `movie/popular?=${page}&api_key=${process.env.REACT_APP_TMDB_KEY}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
