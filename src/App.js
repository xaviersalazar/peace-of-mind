import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./components/context/Auth";
import { FormspreeProvider } from "@formspree/react";
import routes from "./components/routes";

const uri = process.env.REACT_APP_GRAPHQL_URL;

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}>
          {useRoutes(routes)}
        </FormspreeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
