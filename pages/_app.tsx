// pages/_app.tsx
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header'; // Adjust the path as necessary

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header title="Your Custom Title" /> {/* Pass a custom title if desired */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

