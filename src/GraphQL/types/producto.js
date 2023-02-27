
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Tipo de Producto |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import graphql from "graphql";

const { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;


const TipoProducto = new GraphQLObjectType({
  name: "Producto",
  description: "tipo de Producto",
  fields: () => ({
    id: { type: GraphQLID },
    titulo: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    precio: { type: GraphQLInt },
    imagen: { type: GraphQLString },
    codigo: { type: GraphQLString },
    timestamp: { type: GraphQLString },
  }),
});

export { TipoProducto };
