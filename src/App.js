import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import MessageList from './components/MessageList';
import MessageCreate from './components/MessageCreate';

const client = new ApolloClient({});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>ChatX</h1>
          <MessageList />
          <MessageCreate />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
