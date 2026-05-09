import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectToDatabase } from "./db.connection.js";
import typeDefs from "./typeDefs.js";
import { checkAuth } from "./auth.js";

await connectToDatabase();
console.log("connected to DB");

const server = new ApolloServer({
  typeDefs,
  formatError: (err) => {
    return err.message;
  },
});

const PORT = process.env.PORT;
const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
  context: async ({ req }) => {
    const user = await checkAuth(req);
    return { user };
  },
});

console.log(`Server running on ${url}`);
