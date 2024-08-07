import { Person } from "../models/person";

export class PersonBuilder {
    private title: string = '';
    private firstName: string = '';
    private middleName: string = '';
    private lastName: string = '';
    private email: string = '';
    constructor() { };

    withTitle(title: string): PersonBuilder {
        this.title = title;
        return this;
    };

    withFirstName(firstName: string): PersonBuilder {
        this.firstName = firstName;
        return this;
    };

    withMiddleName(middleName: string): PersonBuilder {
        this.middleName = middleName;
        return this;
    };

    withLastName(lastName: string): PersonBuilder {
        this.lastName = lastName;
        return this;
    };

    withEmail(email: string): PersonBuilder {
        this.email = email;
        return this;
    }

    build() {
        return new Person(
            this.title,
            this.firstName,
            this.middleName,
            this.lastName,
            this.email
        )
    }
}