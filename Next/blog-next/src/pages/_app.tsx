import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../modules/Footer';
import { Header } from '../modules/Header';
import { GlobalStyles, theme } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
