import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    paddingTop: 50,
  },
  authWrapper: {
    flexDirection: 'column',
    paddingTop: 50,
    margin: '50px 65px 0 50px',
  },
  welcome: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 26,
    paddingBottom: 20,
    fontWeight: 950,
    fontFamily: "'Roboto'",
  },
}));

export default useStyles;
