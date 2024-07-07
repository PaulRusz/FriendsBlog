import { Outlet } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

import './App.css'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Request Middleware To Attach JWT Token To Every Request As An `Authorization` Header
const AuthLink = setContext((_, { headers }) => {
  // Get Auth Token From Local Storage If It Exists
  const Token = localStorage.getItem('id_token');
  // Return Headers To Context So `httpLink` Can Read Them
  return {
    headers: {
      ...headers,
      authorization: Token ? `Bearer ${Token}` : '',
    },
  };
});

// Client Executes `AuthLink` Middleware Prior To Making Requests To GraphQL API
const Client = new ApolloClient({
  link: AuthLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={Client}>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;