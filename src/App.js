import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseGraphqlUrl = process.env.REACT_APP_SUPABASE_GRAPHQL_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const client = new ApolloClient({
  uri: `${supabaseUrl}${supabaseGraphqlUrl}`,
  headers: {
    apiKey: supabaseAnonKey,
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<a href="/">Return to homepage</a>} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
