
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Tipo de Mensaje |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import graphql from 'graphql';
import { TipoUsuario } from '../types/producto.js';
import { ApiUsuarios } from '../../Api/index.js';


const { GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull } = graphql;

//  QUERIES

const obtenerTodosUsuarios = {
    type: new GraphQLList(TipoUsuario),
    description: "obtiene todos los usuarios como array",
    resolve: async () => {
        const respuesta = await ApiUsuarios.obtenerTodosUsuarios();
        return respuesta;
    },
};

const obtenerUsuariosXid = {
    type: TipoUsuario,
    args: {
        id: { type: GraphQLInt },
    },
    description: "obtiene un usuario como objeto",
    resolve: async (_, { id }) => {
        const respuesta = ApiUsuarios.obtenerUsuariosXid(id);
        return respuesta;
    },
};

//  MUTATIONS 

const guardarUsuarios = {
    type: TipoUsuario,
    args: {
        nombre: { type: new GraphQLNonNull(GraphQLString) },
        edad: { type: new GraphQLNonNull(GraphQLString) },
        usuario: { type: new GraphQLNonNull(GraphQLString) },
        avatar: { type: new GraphQLNonNull(GraphQLString) },
        contrasena: { type: new GraphQLNonNull(GraphQLInt) },
        telefono: { type: new GraphQLString(GraphQLInt) },
        direccion: { type: new GraphQLString(GraphQLString) }
    },
    resolve: async (_, usuario) => {
        const respuesta = ApiUsuarios.guardarUsuarios(usuario);
        return respuesta;
    },
};


const ResolucionUsuarios = {
    queries: {
        obtenerTodosUsuarios,
        obtenerUsuariosXid,
    },
    mutations: {
        Producto: guardarUsuarios,
    },
};

export { ResolucionUsuarios };


// Peticiones GraphiQLI 

// query {
//   obtenerUsuariosXid (id: 1) {   //(id: "")
    // nombre, 
    // edad, 
    // usuario, 
    // avatar, 
    // contrasena, 
    // telefono, 
    // direccion
//   }
// }
// query {
//   obtenerTodosUsuarios {
    // nombre, 
    // edad, 
    // usuario, 
    // avatar, 
    // contrasena, 
    // telefono, 
    // direccion
//   }
// }


// Mutation para prueba Graphiql

// mutation {
//   guardarUsuarios {
    // nombre, 
    // edad, 
    // usuario, 
    // avatar, 
    // contrasena, 
    // telefono, 
    // direccion
//   }
// }