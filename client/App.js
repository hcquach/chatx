// Import external librairies
import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { FaHeart } from 'react-icons/fa';

// Import internal librairies
import MessageList from './components/MessageList';
import MessageCreate from './components/MessageCreate';
import VideoTraining from './components/VideoTraining';
import './style/style.css';

const client = new ApolloClient({});

class App extends Component {

  // Setting up ApolloProvider and rendering the elements of the main page
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
              <MessageCreate />
              <MessageList />
            </div>
            <div className="description">
              <h2>Chat & Learn with your colleagues</h2>
              <div>
                <VideoTraining />
              </div>
              <h3>Made with <FaHeart /> in 2 days. Had fun & Learned a lot. Hien-Chanh.</h3>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
