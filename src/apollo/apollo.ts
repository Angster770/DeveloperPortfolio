import { ApolloClient, InMemoryCache } from "@apollo/client"
export const client = new ApolloClient({
  uri: "http://localhost:3000", // Replace with your actual GraphQL server URL
  cache: new InMemoryCache(),
})
