import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import { ApolloClient } from "apollo-client";
import { createHttpLink as CreateHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "react-apollo";
import Admin from "./main/Admin";
// import Login from './main/Login';
import cache from "./cache";
// import backendIp from './constant';
import store from "./store";
import { setError } from "./action";

const GraphqlUrl = "http://localhost:9999";

const httpLink = new CreateHttpLink({
  uri: GraphqlUrl
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : null
    }
  };
});

const linkError = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) store.dispatch(setError(graphQLErrors));
  if (networkError) store.dispatch(setError(networkError));
});

const authAndError = authLink.concat(linkError);

const client = new ApolloClient({
  link: authAndError.concat(httpLink),
  cache
});

const styles = {
  notFoundParent: {
    position: "relative"
  },
  notFound: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

const Appety = () => (
  <ApolloProvider client={client}>
    <Helmet>
      <title>StaWeb</title>
    </Helmet>
    <Router>
      <Switch>
        <Route path="/" component={Admin} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export const exportedUrl = GraphqlUrl;
export default withStyles(styles)(Appety);
