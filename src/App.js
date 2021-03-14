import React from 'react';
import TodoApp from './components/TodoApp';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './main.scss';
import Footer from './components/Footer';
import Header from './components/Header';

const theme = createMuiTheme({
  palette: {
    error: {
      light: '#C06C84',
      main: '#C06C84',
      dark: '#C06C84',
    },
    primary: {
      main: '#6b5b7as',
    },
  },
  // overrides: {
  //   underline: {
  //     '&:after': {
  //       borderBottom: `2px solid #FFFFFF`,
  //     },
  //     '&$focused:after': {
  //       borderBottomColor: `#FFFFFF`,
  //     },
  //     '&$error:after': {
  //       borderBottomColor: `#FFFFFF`,
  //     },
  //     '&:before': {
  //       borderBottom: `1px solid #FFFFFF`,
  //     },
  //     '&:hover:not($disabled):not($focused):not($error):before': {
  //       borderBottom: `2px solid #FFFFFF`,
  //     },
  //     '&$disabled:before': {
  //       borderBottom: `1px dotted #FFFFFF`,
  //     },
  //   },
  // },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          border: '1px solid black',
          // backgroundColor: '#dbdbdb',
          background: 'rgb(53,92,125)',
          background:
            'linear-gradient(180deg, rgba(53,92,125,1) 0%, rgba(108,91,123,1) 49%, rgba(192,108,132,1) 100%)',
        }}
      >
        <Grid container flex-direction='column'>
          <Grid item xs={12} sm={2} md={2} lg={4} xl={4}></Grid>

          <Grid item xs={12} sm={8} md={8} lg={4} xl={4}>
            <Header />
            <TodoApp />
            <Footer />
          </Grid>

          <Grid item xs={12} sm={2} md={2} lg={4} xl={4}></Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;
