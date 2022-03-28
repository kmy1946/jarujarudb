import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import theme from '../src/theme';
/*
import '../styles/AllSearch.module.css';
import '../styles/Categories.module.css';
import '../styles/custom.module.css';
import '../styles/Datalist.module.css';
import '../styles/Footer.module.css';
//import '../styles/globals.css';
import '../styles/Header.module.css';
import '../styles/Home.module.css';
import '../styles/layout.module.css';
import '../styles/UIkits.module.css';
*/

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
