import React, { Component } from 'react';
import './App.css';
import {withRouter, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Callback from './Callback'
import auth0Client from './Auth/Auth'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import UserCard from 'changeup-component-lib/dist/Usrcard';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div>
          <Navbar />
          <h1>You be {auth0Client.isAuthenticated() ? null : 'not'} logged in</h1>
          {
            auth0Client.isAuthenticated() && 
            <p>Welcome to Changeup... arr</p>
          }
          <Route exact path='/callback' component={Callback}/>
          <UserCard />
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
