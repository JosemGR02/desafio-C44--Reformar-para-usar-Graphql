
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Tipo de Mensaje |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import graphql from 'graphql';
import { TipoMensaje } from '../types/producto.js';
import { ApiMensajes } from '../../Api/index.js';

const { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLInt } = graphql;


//  QUERIES

const obtenerTodosMensajes = {
    type: new GraphQLList(TipoMensaje),
    description: "obtiene todos los mensajes como array",
    resolve: async () => {
        const respuesta = await ApiMensajes.obtenerTodosMensajes();
        return respuesta;
    },
};

const obtenerMensajesXid = {
    type: TipoMensaje,
    args: {
        id: { type: GraphQLInt },
    },
    description: "obtiene un mensaje por id",  //!
    resolve: async (_, { id }) => {
        const respuesta = ApiMensajes.obtenerMensajesXid(id);
        return respuesta;
    },
};


//  MUTATIONS

const guardarMensajes = {
    type: TipoMensaje,
    args: {
        id: { type: GraphQLInt },
        nombre: { type: new GraphQLNonNull(GraphQLString) },
        apellido: { type: new GraphQLNonNull(GraphQLString) },
        edad: { type: new GraphQLNonNull(GraphQLInt) },
        alias: { type: new GraphQLNonNull(GraphQLString) },
        avatar: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, mensaje) => {
        const respuesta = ApiMensajes.guardarMensajesBD(mensaje);
        return respuesta;
    },
};

const ResolucionMensajes = {
    queries: {
        obtenerTodosMensajes,
        obtenerMensajesXid,
    },
    mutations: {
        Mensaje: guardarMensajes, //!
    },
};

export { ResolucionMensajes };


// Peticiones GraphiQLI

// query {
//   obtenerMensajesXid (id: 1) {   //(id: "")
//     id,
//     nombre,
//     apellido,
//     edad,
//     avatar,
//     alias
//   }
// }
// query {
//   obtenerTodosMensajes {
//     id,
//     nombre,
//     apellido,
//     edad,
//     avatar,
//     alias
//   }
// }


// Mutation para prueba Graphiql

// mutation {
//   guardarMensajes {
//     id,
//     nombre,
//     apellido,
//     edad,
//     avatar,
//     alias
//   }
// }