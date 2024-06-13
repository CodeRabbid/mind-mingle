import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { jwtDecode } from "jwt-decode";

import App from "./App.tsx";
import { getAccessToken, setAccessToken } from "./accessToken.ts";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

const authLink = setContext(async (_, { headers }) => {
  let accessToken = getAccessToken();
  let refreshAccessToken = false;
  try {
    const { exp } = jwtDecode(accessToken);
    if (Date.now() >= exp! * 1000) {
      refreshAccessToken = true;
    }
  } catch {
    refreshAccessToken = true;
  }
  if (refreshAccessToken) {
    const x = await fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    });
    const y = await x.json();
    setAccessToken(y.accessToken);
  }

  accessToken = getAccessToken();

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
