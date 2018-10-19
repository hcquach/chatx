// Import external librairies
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// Import the query to fetch and display all chat messages
import query from '../queries/fetchMessages';

class MessageCreate extends Component {
    // Constructor with a default value for anonymous users
    constructor(props) {
        super(props);
        this.state = { 
            content: '', 
            user: 'MisterX'
        };
    }

    // Validate if content has been filled
    validate() {
        return (this.state.content.length < 1)
    }

    // Check if the form is valid, call the mutation with the new attributes and refetch queries to update the list
    onSubmit(event) {
        event.preventDefault();
        const err = this.validate();
        console.log(err);
        if (!err) {
            this.props.mutate({
                variables: { content: this.state.content, user: this.state.user },
                refetchQueries: [{ query }]
            });
        }
    }

    // Render the form calling the onSubmit function
    render() {
        return (
            <div>
                <h2>Send a new message</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Name:</label>
                    <input 
                        onChange={event => this.setState({ user: event.target.value })}
                        placeholder="MisterX"
                        value={this.state.user}
                        style={{margin: '5px'}}
                    />
                    <label>Message:</label>
                    <input 
                        onChange={event => this.setState({ content: event.target.value })}
                        value={this.state.content}
                        style={{margin: '5px'}}
                    />
                     <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

// Variable to pass the mutation to GQL server on message creation
const mutation = gql`
    mutation AddMessage($user: String, $content: String!) {
        addMessage(user: $user, content: $content) {
            content
        }
    }
`;

export default graphql(mutation)(MessageCreate);