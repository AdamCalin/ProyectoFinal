export interface IDatosUser {

    email?: string,
    iD_PERFIL?: number,
    iD_USUARIO?: number,
    usuario?: string

}


export interface IToken {
    token?: string,
    expiracion?: Date,
    id_usuario?: number
}

