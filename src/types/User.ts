export type User = {
    id:         number,
    username:   string,
    email:      string,
    provider:   string,
    confirmed:  boolean,
    blocked:    boolean,
    createdAt:  string,
    updatedAt:  string,
}

export type LoginResponse = {
    jwt: string
    user: User
}