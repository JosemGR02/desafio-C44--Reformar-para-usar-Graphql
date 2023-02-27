
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Tipo de Usuario |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import graphql from "graphql";

const { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;


const TipoUsuario = new GraphQLObjectType({
    name: "Usuario",
    description: "tipo de Usuario",
    fields: () => ({
        id: { type: GraphQLID },
        nombre: { type: GraphQLString },
        usuario: { type: GraphQLString },
        edad: { type: GraphQLInt },
        avatar: { type: GraphQLString },
        contrasena: { type: GraphQLInt },
        telefono: { type: GraphQLInt },
        direccion: { type: GraphQLString },
    }),
});

export { TipoUsuario };





