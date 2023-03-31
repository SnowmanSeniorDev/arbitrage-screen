export interface IVariables {
    email: string
    password: string
}

export interface User {
    _id: string
    email: string
    name: string
    completedKyc: boolean
}

export interface Grant {
    access_grant: string
    pass_phrase: string
}

interface IMessage {
    message: string
}

export interface IError {
    response: {
        errors: string | IMessage[]
    }
}

export interface Token {
    access_token: string
    expires_in: string
}

export interface IResponse {
    login: {
        user: User
        token: Token
        access_grant: string
    }
}
