import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

class MessageCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '', 
            user: ''
        };
    }

    render() {
        return (
            <div>
                <h3>Send a new message</h3>
                <form>
                    <label>Name:</label>
                    <input 
                        onChange={event => this.setState({ name: event.target.value })}
                        value={this.state.name}
                    />
                    <label>Message:</label>
                    <input 
                        onChange={event => this.setState({ name: event.target.value })}
                        value={this.state.content}
                    />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddMessage($user: String, $content: String) {
        addMessage(user: $user, content: $content) {
            content
        }
    }
`;

export default graphql(mutation)(MessageCreate);