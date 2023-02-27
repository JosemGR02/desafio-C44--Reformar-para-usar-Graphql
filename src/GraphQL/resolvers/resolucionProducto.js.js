
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Tipo de Mensaje |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import graphql from 'graphql';
import { TipoProducto } from '../types/producto.js';
import { ApiProductos } from '../../Api/index.js';


const { GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull } = graphql;  //GraphQLFloat, 

//  QUERIES

const obtenerTodosProductos = {
  type: new GraphQLList(TipoProducto),
  description: "obtiene todos los productos como array",
  resolve: async () => {
    const respuesta = await ApiProductos.obtenerTodosProductos();
    return respuesta;
  },
};

const obtenerProductosXid = {
  type: TipoProducto,
  args: {
    id: { type: GraphQLInt },
  },
  description: "obtiene un producto como objeto",
  resolve: async (_, { id }) => {
    const respuesta = ApiProductos.obtenerProductosXid(id);
    return respuesta;
  },
};

//  MUTATIONS

const guardarProductos = {
  type: TipoProducto,
  args: {
    titulo: { type: new GraphQLNonNull(GraphQLString) },
    descripcion: { type: new GraphQLNonNull(GraphQLString) },
    imagen: { type: new GraphQLNonNull(GraphQLString) },
    codigo: { type: new GraphQLNonNull(GraphQLString) },
    precio: { type: new GraphQLNonNull(GraphQLInt) },
    timestamp: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (_, producto) => {
    const respuesta = ApiProductos.guardarProductos(producto);
    return respuesta;
  },
};


const ResolucionProductos = {
  queries: {
    obtenerTodosProductos,
    obtenerProductosXid,
  },
  mutations: {
    Producto: guardarProductos,
  },
};

export { ResolucionProductos };


// Peticiones GraphiQLI 

// query {
//   obtenerProductosXid (id: 1) {   //(id: "")
//     id,
//     descripcion,
//     imagen,
//     codigo,
//     precio,
//     timestamp
//   }
// }
// query {
//   obtenerTodosProductos {
//     id,
//     descripcion,
//     imagen,
//     codigo,
//     precio,
//     timestamp
//   }
// }


// Mutation para prueba Graphiql

// mutation {
//   guardarProductos {
//     id,
//     descripcion,
//     imagen,
//     codigo,
//     precio,
//     timestamp
//   }
// }