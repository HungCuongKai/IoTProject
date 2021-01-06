const {gql} = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  enum command {
    COMMAND1
    COMMAND2
    COMMAND3
  }

  type session {
  	id : String
  	name: String
  }

  scalar JSON

  ## schema for reponse
  type Query {
    session : session,
    data(cmd: String,s_cmd: String): String
    data_row(cmd: String,
    		 condition: String
    		 selector: String
    		 ) : [JSON]
  }
`;


module.exports = typeDefs