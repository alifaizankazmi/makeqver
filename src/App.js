import React from 'react';

import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { teal } from '@material-ui/core/colors';

import AppHeader from './AppHeader';
import CodeBin from './CodeBin';
import FormatSettings from './FormatSettings';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: teal[200]
    }
  },
  typography: {
    fontFamily: [
      'Consolas'
    ]
  }
});

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppHeader />
        <FormatSettings />
        <CodeBin />
      </div>
    </ThemeProvider>
  );
}

export default App;
