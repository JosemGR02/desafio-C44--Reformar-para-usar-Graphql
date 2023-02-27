
import graphql from "graphql";
import {
  ResolucionMensajes, ResolucionCarritos,
  ResolucionUsuarios, ResolucionProductos,
} from "./resolvers/index.js";

const { GraphQLObjectType, GraphQLSchema } = graphql;


const TipoQuery = new GraphQLObjectType({
  name: "Tipo de consulta",
  description: "Consultas",
  fields: {
    ...ResolucionProductos.queries,
    ...ResolucionUsuarios.queries,
    ...ResolucionMensajes.queries,
    ...ResolucionCarritos.queries,
  },
});

// const TipoMutation = new GraphQLObjectType({
//   name: "Tipo de Mutacion",
//   description: "Mutaciones",
//   fields: {
//     ...ResolucionProductos.mutations,
//     ...ResolucionUsuarios.mutations,
//     ...ResolucionMensajes.mutations,
//     ...ResolucionCarritos.mutations,
//   },
// });

const EsquemaGralphQl = new GraphQLSchema({
  query: TipoQuery,
  // mutation: TipoMutation,
});

export { EsquemaGralphQl };

