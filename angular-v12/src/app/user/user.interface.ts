import { ServerResponse } from '../app.interface';

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Address {
    address: string;
    city: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
}

export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export interface Company {
    address: Address;
    department: string;
    name: string;
    title: string;
}

export interface Hair {
    color: string;
    type: string;
}

export interface User {
    address: Address;
    age: number;
    bank: Bank;
    birthDate: string;
    bloodGroup: string;
    company: Company;
    domain: string;
    ein: string;
    email: string;
    eyeColor: string;
    firstName: string;
    gender: string;
    hair: Hair;
    height: number;
    id: number;
    image: string;
    ip: string;
    lastName: string;
    macAddress: string;
    maidenName: string;
    password: string;
    phone: string;
    ssn: string;
    university: string;
    userAgent: string;
    weight: number;
}

export interface UserListServerResponse extends ServerResponse {
    users: User[];
}
