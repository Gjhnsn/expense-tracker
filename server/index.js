import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import express from "express";

import schema from "./graphql/index.js";

import * as dotenv from "dotenv";
dotenv.config();

const server = new ApolloServer({
  schema
});

const app = express();
await server.start();
server.applyMiddleware({ app, path: "/" });

// mongoose connection
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
  .then(() => {
  console.log(`Mongoose Connection Successful`);
  // start server
  return app.listen(
    { port: process.env.PORT },
    console.log(`Server is running at port: ${process.env.PORT}`)
  );
});
