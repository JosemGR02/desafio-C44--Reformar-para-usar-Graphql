
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| DTO - Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


class ProdutosDTO {
    constructor({ titulo, descripcion, codigo, imagen, precio, stock, timestamp }) {
        this.titulo = titulo
        this.descripcion = descripcion
        this.codigo = codigo
        this.imagen = imagen
        this.precio = precio
        this.stock = stock
        this.timestamp = timestamp
    }
}

export function usandoDTO(elemento) {
    if (Array.isArray(elemento))
        return elemento.map(item => new ProdutosDTO(item))
    else
        return new ProdutosDTO(elemento)
}


export default { ProdutosDTO };



// function noticiaDTO(noticia, _id, fyh) {
//     return {
//         ...noticia,
//         _id,
//         fyh
//     }
// }

// export default noticiaDTO