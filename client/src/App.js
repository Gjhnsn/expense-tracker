import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/globalStyles";
import Layout from "./components/Layout/Layout";

const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
