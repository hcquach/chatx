// Import external librairies
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// Import the query to fetch and display all chat messages
import query from '../queries/fetchMessages';

class MessageList extends Component {

    // Mapping the messages array, and display each user and content in a list
    renderMessages() {
        console.log(this.props.data.messages);
        return this.props.data.messages.map(({ id, content, user }) => {
            return (
                <li key={id}>
                    <div className="message-user">{user}</div>
                    <div className="message-content">{content}</div>
                </li>
            );
        });
    }

    // RenderMessages only when data has been loaded
    render() {
        if (this.props.data.loading) { return <div>Loading...</div>; }
        return (
            <ul>
                {this.renderMessages()}
            </ul>
        );
    }
}

export default graphql(query)(MessageList);