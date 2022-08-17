import React from 'react';
import { useState, useEffect } from 'react';
import {
  useMediaQuery,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import { useGetMoviesQuery } from '../../services/TMDB';
import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching === true) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px" justifyContent="center">
        <Typography variant="h4">
          No Movies That Match The Name. <br />
          Please Search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) {
    return 'An error has occured';
  }

  return (
    <>
      <div>
        <MovieList movies={data} />
      </div>
    </>
  );
};

export default Movies;
