import type { AppProps } from 'next/app';
import React from 'react';
import { CssBaseline } from '@mui/material';
import '@src/styles/fonts';
import '@src/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
