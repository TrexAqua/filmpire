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

const Movies = () => {
  const { data } = useGetMoviesQuery();
  console.log(data);

  return <div>Movies</div>;
};

export default Movies;
