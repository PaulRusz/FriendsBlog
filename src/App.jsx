import "./App.css";
import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
