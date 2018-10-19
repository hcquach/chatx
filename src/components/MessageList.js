import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/fetchMessages';

class MessageList extends Component {

    renderMessages() {
        console.log(this.props.data.messages);
        return this.props.data.messages.map(({ id, content, user }) => {
            return (
                <li key={id}>
                    {content} from {user}
                </li>
            );
        });
    }

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