import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/client';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
  <ApolloProvider client={apolloClient}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
  );
}

export default App;
