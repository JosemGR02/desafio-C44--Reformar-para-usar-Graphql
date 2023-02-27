import express from "express";
import { config } from "./config/index.js";
import { productsRouter, cartsRouter } from "./routers/index.js";
import { MongoDBService } from "./services/index.js";
import { schema } from "./graphql/index.js";

// Lo nuevo para graphql
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use(express.static("public"));

// el middleware, para exponer en /graphql todo su schema
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(config.server.routes.products, productsRouter);
app.use(config.server.routes.carts, cartsRouter);

// MongoDBService.init();

const server = app.listen(config.server.PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
});
server.on("error", (error) => {
  console.error(`Server error: ${error}`);
});
