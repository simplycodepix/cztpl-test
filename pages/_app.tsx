import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/store';
import theme from "../_tpl/scss/theme.scss";

import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <h1 class={theme.themeh1}>Providing some layout</h1>
        <Component {...pageProps} />
      </Provider>)
  }
}

export default MyApp
