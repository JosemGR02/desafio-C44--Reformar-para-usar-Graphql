
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Tipo de Mensaje |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import graphql from "graphql";

const { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;


const TipoUsuario = new GraphQLObjectType({
    name: "Usuario",
    description: "tipo de Usuario",
    fields: () => ({
        id: { type: GraphQLID },
        nombre: { type: GraphQLString },
        apellido: { type: GraphQLString },
        edad: { type: GraphQLInt },
        alias: { type: GraphQLString },
        avatar: { type: GraphQLString },
    }),
});

export { TipoUsuario };

