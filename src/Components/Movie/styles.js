import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    borderRadius: '20px',
    height: '300px',
    marginBottom: ' 10px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  movie: {
    padding: '10px',
  },
  link: {
    alignItems: 'center',
    fontWeight: 'bolder',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '230px',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: '0',
    textAlign: 'center',
  },
}));
