import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import { CircularProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  const CreateAccountLink = (): JSX.Element => {
    return (
      <Link to="/signup" className={classes.link}>
        Create an account
      </Link>
    );
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <FormLabel className={classes.formLabel}>email address</FormLabel>
          <TextField
            id="email"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="email"
            autoComplete="email"
            autoFocus
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
            variant="outlined"
            className={classes.textField}
          />
          <FormLabel className={classes.formLabel}>password</FormLabel>
          <TextField
            id="password"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
              endAdornment: <Typography className={classes.forgot}>Forgot?</Typography>,
            }}
            type="password"
            autoComplete="current-password"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
            variant="outlined"
            className={classes.textField}
          />
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? (
                <CircularProgress style={{ color: 'white' }} />
              ) : (
                <Typography className={classes.submitText}>login</Typography>
              )}
            </Button>
            <Typography className={classes.linkPretext}>Don&#39;t have an account? {CreateAccountLink()}</Typography>
          </Box>
          <div style={{ height: 95 }} />
        </form>
      )}
    </Formik>
  );
}
