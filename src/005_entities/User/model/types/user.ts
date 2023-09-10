export interface User {
    id: string;
    username: string;
    userEmail: string;
}

export interface UserScheme {
    authData?: User;
}
