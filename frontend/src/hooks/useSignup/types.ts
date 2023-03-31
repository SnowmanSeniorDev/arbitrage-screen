export interface IVariables {
    email: string
    password: string
    name: string
}

interface IMessage {
    message: string
}

export interface IError {
    response: {
        errors: string | IMessage[]
    }
}

export interface IResponse {
    email: string
}
