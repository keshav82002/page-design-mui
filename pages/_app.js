import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider><Component {...pageProps} /></ThemeProvider>
  )
}

export default MyApp
