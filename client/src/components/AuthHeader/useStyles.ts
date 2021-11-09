import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sitterLink: {
    color: '#000000',
    fontWeight: 950,
    marginRight: 35,
  },
  headerWrapper: {
    margin: '15px',
  },
  logo: {
    maxWidth: 150,
  },
  authWrapper: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  accAside: {
    fontSize: 14,
    color: '#b0b0b0',
    fontWeight: 400,
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
  },
  link: { textDecoration: 'none' },
  loginBtn: {
    width: 160,
    height: 50,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FFFFFF',
    color: '#F04040',
    boxShadow: 'none',
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
  },
  signupBtn: {
    width: 160,
    height: 50,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F04040',
    color: '#FFFFFF',
    boxShadow: 'none',
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
