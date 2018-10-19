// Import external librairies
import gql from 'graphql-tag';

export default gql`
    { 
        messages {
            id
            content
            user
        }
    }
`;