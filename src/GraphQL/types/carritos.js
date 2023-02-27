
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Tipo de Carrito |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import graphql from "graphql";

const { GraphQLID, GraphQLObjectType, GraphQLString } = graphql;


const TipoUsuario = new GraphQLObjectType({
    name: "Usuario",
    description: "tipo de Usuario",
    fields: () => ({
        id: { type: GraphQLID },
        productos: { type: GraphQLObjectType },
        usuario: { type: GraphQLObjectType },
        timestamp: { type: GraphQLString },
    }),
});

export { TipoUsuario };

