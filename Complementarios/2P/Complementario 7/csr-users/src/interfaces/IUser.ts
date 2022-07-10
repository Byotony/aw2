export interface IResUser {
    total: number;
    users: User[];
}

export interface User {
    _id?: string;
    ci: string;
    fullName: string;
    password: string;
    userAdmin: number;
}