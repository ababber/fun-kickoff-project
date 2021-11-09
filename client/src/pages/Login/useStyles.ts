import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    paddingTop: 50,
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#000000',
    fontWeight: 950,
    fontFamily: "'Roboto'",
  },
}));

export default useStyles;
