import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 50,
  },
  authWrapper: {
    flexDirection: 'column',
    paddingTop: 50,
    margin: '0 115px 50px 100px',
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
