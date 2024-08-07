import { PersonBuilder } from "../builders/person-builder";
import { Person } from "../models/person";
import { randomFromCollection, randomNumber, randomNumberString } from "../utils/randomizers";
import { DataReader } from "./data-reader";

interface Household {
    home: string,
    lastName: string,
    names: string[]
}

interface Credential {
    home: string,
    lastName: string,
    firstName: string
}

export class NameReader {
    private households: Household[];
    private home: string = '';
    private lastName: string = '';
    private firstName: string = '';
    private middleName: string = '';

    constructor() {
        this.households = DataReader.read('names.yaml') as Household[];
    }

    generateRandomPerson(): Person {
        const person = this.selectRandomName();
        return this.createPerson(person);
    }

    getPersonByFirstName(firstName: string): Person {
        const people = this.flattenHouseholdNames();
        const person = people.find(p => p.firstName === firstName);
        if (!person) {
            throw new Error(`No records found for first name '${firstName}'`)
        }
        return this.createPerson(person);
    }

    getPersonByFirstAndLastName(firstName: string, lastName: string): Person {
        const people = this.flattenHouseholdNames();
        const person = people.find(p => p.lastName === lastName && p.firstName === firstName);
        if (!person) {
            throw new Error(`No records found for name '${firstName} ${lastName}'`)
        }
        return this.createPerson(person);
    }

    private selectRandomName(): Credential {
        const names = this.flattenHouseholdNames();
        return randomFromCollection(names);
    }

    private flattenHouseholdNames(): Credential[] {
        return this.households.flatMap(h =>
            h.names.map(n => ({ lastName: h.lastName, firstName: n, home: h.home }))
        );
    }

    private extractTitle(nameAndTitle: string): string {
        const titles = ['Mr', 'Ms', 'Mrs', 'Miss'];
        const titleIndex = Number.parseInt(nameAndTitle.split(' ')[0]);
        return titles[titleIndex] || '';
    }

    private extractFirstName(nameAndTitle: string): string {
        return nameAndTitle.split(' ')[1] || '';
    }

    private extractMiddleName(nameAndTitle: string): string {
        const parts = nameAndTitle.split(' ');
        return parts.slice(2).join(' ') || '';
    }

    private generateEmail(): string {
        const domain = `@${this.home.replaceAll(' ', '-')}.com`;
        const name = this.middleName ? `${this.firstName}-${this.middleName}` : this.firstName;
        const emailOptions = [
            `${name}.${this.lastName}`,
            `${this.firstName.charAt(0)}.${this.lastName}`,
            `${this.lastName}${this.firstName.charAt(0)}`
        ];
        const email = emailOptions[randomNumber(emailOptions.length)];
        return `${email}${randomNumberString(4)}${domain}`.replaceAll(' ', '-').toLowerCase();
    }

    private createPerson(person: Credential) {
        this.home = person.home;
        this.firstName = this.extractFirstName(person.firstName);
        this.middleName = this.extractMiddleName(person.firstName);
        this.lastName = person.lastName;
        return new PersonBuilder()
            .withTitle(this.extractTitle(person.firstName))
            .withFirstName(this.firstName)
            .withMiddleName(this.middleName)
            .withLastName(this.lastName)
            .withEmail(this.generateEmail())
            .build();
    }
}