import { createServer } from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';
import logger from 'morgan';

require('dotenv').config();

const app = express();
const server = createServer(app);
const port = process.env.PORT || 5000;
const graphql_path = process.env.GRAPHQL_PATH || '/';

const init = async () => {
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
  });
  app.use(logger('tiny'));
  await apollo.applyMiddleware({
    app,
    path: graphql_path,
  });
  server.listen(port, () => {
    console.clear();
    console.log(`🚀 Listening on ${port}`);
  });
};

init();
