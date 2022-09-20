import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
