import { ApolloServer } from 'apollo-server-micro';
import schema from '../../server/schema';

const server = new ApolloServer({
  schema: schema
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default server.createHandler({
  path: '/api/graphql'
});
