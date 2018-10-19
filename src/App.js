import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import MessageList from './components/MessageList';
import MessageCreate from './components/MessageCreate';
import './style/App.css';
import './style/style.css';

const client = new ApolloClient({});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header>
              <nav>
                  <h1 className="logo">ChatX</h1>
              </nav>
          </header>
          <div>
            <MessageList />
            <MessageCreate />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
