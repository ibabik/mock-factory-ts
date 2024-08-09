import { Address } from "./address";

export class Person {
    constructor(public title: string,
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
        public address: Address
    ) { };
}