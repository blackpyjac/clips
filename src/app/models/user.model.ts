/* 
export default class IUser{
    email?: string:
    password?: string:
    age?: string;
    name?: string;
    phoneNumber?: string;
}

*/

export default interface IUser{
    email: string,
    password?: string,
    age: string,
    name: string,
    phoneNumber: string
}