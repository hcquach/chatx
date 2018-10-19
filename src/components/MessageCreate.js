import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchMessages';

class MessageCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content: '', 
            user: 'MisterX'
        };
    }

    validate() {
        return (this.state.content.length < 1)
    }

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

    render() {
        return (
            <div>
                <h3>Send a new message</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Name:</label>
                    <input 
                        onChange={event => this.setState({ user: event.target.value })}
                        placeholder="MisterX"
                        value={this.state.user}
                    />
                    <label>Message:</label>
                    <input 
                        onChange={event => this.setState({ content: event.target.value })}
                        value={this.state.content}
                    />
                     <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddMessage($user: String, $content: String!) {
        addMessage(user: $user, content: $content) {
            content
        }
    }
`;

export default graphql(mutation)(MessageCreate);