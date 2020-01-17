import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Signin from "./components/login";
import Signup from "./components/register";
import Users  from "./components/users";
import Navbar from "./components/navbar";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: " http://localhost:4000/",
  onError: ({ networkError, graphQLErrors }) => {
    console.log(networkError);
    console.log(graphQLErrors);
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Link to="/Login">LOGIN</Link>
        <br />
        <Link to="/Register">REGISTER</Link>
        <br />
        <Link to="/Users">USERS</Link>
        <Switch>
          <Route exact path="/Login" component={Signin} />
          <Route exact path="/Register" component={Signup} />
          <Route exact path="/Users" component={Users} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
