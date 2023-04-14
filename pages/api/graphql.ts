import { ApolloServer, UserInputError, gql } from 'apollo-server-micro';
import mysql from 'serverless-mysql';
import { schema } from '../../backend/schema';

const db = mysql({
  config: {
    host: 'localhost',
    port: 8889,
    user: 'root',
    database: 'task_mate_dt',
    password: 'root'
  }
})

const apolloServer = new ApolloServer({ schema, context: {db}  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
