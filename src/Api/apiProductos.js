
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { config } from '../Configuracion/config.js';
// import { DaoFactory } from '../Dao/daoFactory.js';
import { usandoDTO } from '../Dto/productosDto.js';
import { ValidacionJoiProducto } from '../Modelos/validacionesJoi/index.js';


class ApiProductos {

    constructor() {
        this.DaoProductos = DaoFactory.obtener(config.SERVER.SELECCION_BASEdDATOS);
    }

    async obtenerTodosProductos() {
        const elementos = await this.DaoProductos.obtenerTodos()
        return elementos.map(elemento => new ValidacionJoiProducto(elemento))
    }

    async obtenerProductosXid(idBuscado) {
        const Dto = await this.DaoProductos.obtenerXid(idBuscado)
        return new ValidacionJoiProducto(Dto)
    }

    async guardarProductosBD(nuevoElemento) {
        await this.DaoProductos.guardar(usandoDTO(nuevoElemento))
    }

    async actualizarProductosXid(idBuscado) {
        const actualizado = await this.DaoProductos.actualizar(idBuscado)
        return new ValidacionJoiProducto(actualizado)
    }

    async eliminarProductosXid(idBuscado) {
        const eliminado = await this.DaoProductos.eliminarXid(idBuscado)
        return new ValidacionJoiProducto(eliminado)
    }

    async eliminarTodosProductos() {
        await this.DaoProductos.eliminarTodos()
    }

    // static asegurarPalabraValida(palabra, requerido) {
    //     try {
    //         ValidacionJoiProducto.validar(palabra, requerido)
    //     } catch (error) {
    //         throw new Error('la Palabra posee un formato json invalido o faltan datos: ' + error.details[0].message)
    //     }
    // }
}

export default ApiProductos;