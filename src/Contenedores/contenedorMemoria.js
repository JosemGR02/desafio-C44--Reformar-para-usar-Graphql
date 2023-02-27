
// import { usandoDTO } from '../Dtos/index.js';
import { logger } from '../Configuracion/logger.js';

class ContenedorMemoria extends contenedorBase {

    constructor() {
        this.elementos = [];
    }

    iniciar() {
        logger.info('Iniciando con el contenedor en Memoria')
    }

    desconectar() {
        logger.info('El contenedor en Memoria ha sido desconectado')
    }

    obtenerTodos() {
        return asDto(this.elementos)
    }

    obtenerXid(id) {
        return usandoDTO(this.elementos[this.obtenerIndice(id)])
    }

    guardar(elemento) {
        this.elementos.push(elemento)
        return usandoDTO(elemento)
    }

    actualizar(id, nuevosdatos) {
        const index = this.obtenerIndice(id)
        const actualizado = { ...this.elementos[index], ...nuevosdatos }
        this.elementos.splice(index, 1, actualizado)
        return usandoDTO(actualizado)
    }

    eliminarXid(id) {
        const [eliminado] = this.elementos.splice(this.obtenerIndice(id), 1)
        return usandoDTO(eliminado)
    }

    eliminarTodos() {
        this.elementos = []
    }
}

export { ContenedorMemoria };




// import noticiaDTO from '../DTOs/noticias.js'
// import NoticiasBaseDAO from './noticias.js'

// class NoticiasMemFileDAO extends NoticiasBaseDAO {

//     constructor(array = []) {
//         super()
//         this.noticias = array
//     }

//     obtenerNoticias = async _id => {
//         try {
//             if (_id) {
//                 let index = this.noticias.findIndex(noticia => noticia._id == _id)
//                 if (index === -1)
//                     return []
//                 return [this.noticias[index]]
//             }
//             else {
//                 return this.noticias
//             }
//         }
//         catch (error) {
//             console.log('error en obtenerNoticias', error)
//             return []
//         }
//     }

//     guardarNoticia = async noticia => {
//         try {
//             let _id = this.getNext_Id(this.noticias)
//             let fyh = new Date().toLocaleString()
//             let noticiaGuardada = noticiaDTO(noticia, _id, fyh)
//             this.noticias.push(noticiaGuardada)

//             return noticiaGuardada
//         }
//         catch (error) {
//             console.log('error en guardarNoticia:', error)
//             let noticia = {}

//             return noticia
//         }
//     }

//     actualizarNoticia = async (_id, noticia) => {
//         try {
//             let fyh = new Date().toLocaleString()
//             let noticiaNew = noticiaDTO(noticia, _id, fyh)

//             let indice = this.getIndex(_id, this.noticias)
//             let noticiaActual = this.noticias[indice] || {}

//             let noticiaActualizada = { ...noticiaActual, ...noticiaNew }

//             indice >= 0 ?
//                 this.noticias.splice(indice, 1, noticiaActualizada) :
//                 this.noticias.push(noticiaActualizada)

//             return noticiaActualizada
//         }
//         catch (error) {
//             console.log('error en actualizarNoticia:', error)
//             let noticia = {}

//             return noticia
//         }
//     }

//     borrarNoticia = async _id => {
//         try {
//             let indice = this.getIndex(_id, this.noticias)
//             let noticiaBorrada = this.noticias.splice(indice, 1)[0]

//             return noticiaBorrada
//         }
//         catch (error) {
//             console.log('error en borrarNoticia:', error)
//             let noticia = {}

//             return noticia
//         }
//     }
// }

// export default NoticiasMemFileDAO