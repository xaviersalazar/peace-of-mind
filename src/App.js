import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./components/context/Auth";
import routes from "./components/routes";

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
      <AuthProvider>{useRoutes(routes)}</AuthProvider>
    </ApolloProvider>
  );
}

export default App;
