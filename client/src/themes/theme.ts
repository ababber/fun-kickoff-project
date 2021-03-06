import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#F14140' },
    secondary: { main: '#FFFFFF' },
    text: { primary: '#000000' },
  },
  shape: {
    borderRadius: 5,
  },
});
