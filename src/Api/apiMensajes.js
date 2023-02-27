
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Mensajes |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { config } from '../Configuracion/config.js';
import { DaoFactory } from '../Dao/daoFactory.js';
import { usandoDTO } from '../Dto/mensajesDto.js';
import { ValidacionJoiMensaje } from '../Modelos/validacionesJoi/index.js';


class ApiMensajes {

    constructor() {
        this.DaoMensajes = DaoFactory.obtener(config.SERVER.SELECCION_BASEdDATOS);
    }

    async obtenerTodosMensajes() {
        const elementos = await this.DaoMensajes.obtenerTodos();
        return elementos.map(item => new ValidacionJoiMensaje(item));
    }

    async obtenerMensajesXid(idBuscado) {
        const Dto = await this.DaoMensajes.obtenerXid(idBuscado);
        return new ValidacionJoiMensaje(Dto);
    }

    async guardarMensajesBD(nuevoElemento) {
        await this.DaoMensajes.guardar(usandoDTO(nuevoElemento));
    }

    async eliminarMensajesXid(idBuscado) {
        const eliminado = await this.DaoMensajes.eliminarXid(idBuscado);
        return new ValidacionJoiMensaje(eliminado);
    }

    async eliminarTodosMensajes() {
        await this.DaoMensajes.eliminarTodos();
    }

    static ValidarDatosMensajes(mensaje, requerido) {
        try {
            ValidacionJoiMensaje.msjValidar(mensaje, requerido)
        } catch (error) {
            throw new Error('El mensaje posee un formato json invalido o faltan datos: ' + error.details[0].message)
        }
    }
}

export default ApiMensajes;