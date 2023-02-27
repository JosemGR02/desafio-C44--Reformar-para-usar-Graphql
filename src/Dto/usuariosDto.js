
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| DTO - Usuarios |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


class usuariosDTO {
    constructor({ nombre, edad, usuario, avatar, contrasena, telefono, direccion }) {
        this.nombre = nombre
        this.edad = edad
        this.usuario = usuario
        this.avatar = avatar
        this.contrasena = contrasena
        this.telefono = telefono
        this.direccion = direccion
    }
}

export function usandoDTO(elemento) {
    if (Array.isArray(elemento))
        return elemento.map(item => new usuariosDTO(item))
    else
        return new usuariosDTO(elemento)
}


export default { usuariosDTO };