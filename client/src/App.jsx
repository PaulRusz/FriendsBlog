import "./App.css";
import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import HomePage from "../src/pages/HomePage";
// import Video from "./components/Video";

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
