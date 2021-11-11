import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(1),
  },
  textField: {
    margin: '0 0 20px 0',
  },
  label: {
    fontSize: 10,
    color: '#000000',
  },
  formLabel: {
    textTransform: 'uppercase',
    color: '#000000',
    fontSize: 12,
    fontWeight: 950,
  },
  link: {
    color: '#F14140',
    fontWeight: 950,
  },
  linkPretext: {
    fontWeight: 950,
  },
  inputs: {
    margin: '.5rem',
    height: '2rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 25,
    marginBottom: 30,
    fontSize: 16,
    backgroundColor: '#F14140',
    fontWeight: 'bold',
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

export default useStyles;
