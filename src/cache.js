import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache({
  addTypename: false
});
export default cache;
