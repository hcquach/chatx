import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import MessageCreate from './components/MessageCreate';

const client = new ApolloClient({});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>ChatX</h1>
          <MessageCreate />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
