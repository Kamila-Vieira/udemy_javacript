import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { GlobalStyles, theme } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
