
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Usuarios |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { config } from '../Configuracion/config.js';
import { DaoFactory } from '../Dao/daoFactory.js';
import { usandoDTO } from '../Dto/usuariosDto.js';
import { ValidacionJoiUsuario } from '../Modelos/validacionesJoi/index.js';


class ApiUsuarios {

    constructor() {
        this.DaoUsuarios = DaoFactory.obtener(config.SERVER.SELECCION_BASEdDATOS);
    }

    async obtenerTodosUsuarios() {
        const elementos = await this.DaoUsuarios.obtenerTodos()
        return elementos.map(item => new ValidacionJoiUsuario(item))
    }
    async obtenerUnUsuario(elemento) {
        const Dto = await this.DaoUsuarios.obtenerUno(elemento)
        return new ValidacionJoiUsuario(Dto)
    }

    async obtenerUsuariosXid(idBuscado) {
        const Dto = await this.DaoUsuarios.obtenerXid(idBuscado)
        return new ValidacionJoiUsuario(Dto)
    }

    async guardarUsuariosBD(nuevoElemento) {
        await this.DaoUsuarios.guardar(usandoDTO(nuevoElemento))
    }

    async eliminarUsuariosXid(idBuscado) {
        const eliminado = await this.DaoUsuarios.eliminarXid(idBuscado)
        return new ValidacionJoiUsuario(eliminado)
    }

    async eliminarTodosUsuarios() {
        await this.DaoUsuarios.eliminarTodos()
    }

    static ValidarDatosUsuarios(usuario, requerido) {
        try {
            ValidacionJoiUsuario.userValidar(usuario, requerido)
        } catch (error) {
            throw new Error('El usuario posee un formato json invalido o faltan datos: ' + error.details[0].message)
        }
    }
}

export default ApiUsuarios;

