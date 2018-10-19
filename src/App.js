import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import MessageList from './components/MessageList';
import MessageCreate from './components/MessageCreate';
import VideoTraining from './components/VideoTraining';
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
          <div className="container">
            <div className="messages-container">
              <MessageCreate className="message-creation"/>
              <MessageList className="messages-list" />
            </div>
            <div className="description">
              <h2>Chat and Learn with your colleagues</h2>
              <div>
                <VideoTraining />
              </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
