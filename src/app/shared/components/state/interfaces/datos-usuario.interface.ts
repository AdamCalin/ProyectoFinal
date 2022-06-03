export interface IDatosUser {

    iD_USUARIO?: number,
    usuario?: string
    email?: string,
    iD_PERFIL?: number,
}


export interface IToken {
    token?: string,
    expiracion?: Date,
    id_usuario?: number
}

