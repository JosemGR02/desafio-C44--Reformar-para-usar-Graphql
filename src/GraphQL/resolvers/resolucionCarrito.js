
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Tipo de Mensaje |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import graphql, { GraphQLObjectType } from 'graphql';
import { TipoCarrito } from '../types/carritos.js';
import { ApiCarritos } from '../../Api/index.js';


const { GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLString } = graphql;

//  QUERIES

const obtenerCarritoXid = {
    type: TipoCarrito,
    args: {
        id: { type: GraphQLInt },
    },
    description: "obtiene el carrito solicitado por id",
    resolve: async (_, { id }) => {
        const respuesta = await ApiCarritos.obtenerCarritoXid(id);
        return respuesta;
    },
};

const obtenerProdsCarrito = {
    type: new GraphQLList(TipoCarrito),
    args: {
        id: { type: GraphQLInt },
    },
    description: "obtiene todos los productos del carrito solicitado",
    resolve: async () => {
        const respuesta = await ApiCarritos.obtenerProdsCarrito();
        return respuesta;
    },
};


const guardarCarritos = {
    type: TipoCarrito,
    args: {
        id: { type: GraphQLInt },
        usuario: { type: new GraphQLNonNull(GraphQLObjectType) },
        productos: { type: new GraphQLNonNull(GraphQLObjectType) },
        timestamp: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, carrito) => {
        const respuesta = ApiMensajes.guardarMensajesBD(carrito);
        return respuesta;
    },
};

const ResolucionCarritos = {
    queries: {
        obtenerCarritoXid,
        obtenerProdsCarrito
    },
    mutations: {
        Carrito: guardarCarritos, //!
    },
};

export { ResolucionCarritos };


// Peticiones GraphiQLI

// query {
//   obtenerCarritoXid (id: 1) {   //(id: "")
//     id,
//     usuario,
//     productos,
//     timestamp
//   }
// }
// query {
//   obtenerProdsCarrito {
//     id,
//     usuario,
//     productos,
//     timestamp
//   }
// }


// Mutation para prueba Graphiql

// mutation {
//   guardarCarritos {
//     id,
//     usuario,
//     productos,
//     timestamp
//   }
// }