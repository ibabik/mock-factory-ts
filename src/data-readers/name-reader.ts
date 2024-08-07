import { PersonBuilder } from "../builders/person-builder";
import { Person } from "../models/person";
import { randomNumber, randomNumberString } from "../utils/randomizers";
import { DataReader } from "./data-reader";

interface Household {
    home: string,
    lastName: string,
    names: string[]
}

export class NameReader {
    private households: Household[];
    private home: string = '';
    private title: string = '';
    private lastName: string = '';
    private firstName: string = '';
    private middleName: string = '';

    constructor() {
        this.households = DataReader.read('names.yaml') as Household[];
    }

    getRandomName(): Person {
        const household = this.getRandom(this.households);
        this.home = household.home;
        this.lastName = household.lastName;
        const nameAndTitle = this.getRandom(household.names);
        this.title = this.getTitle(nameAndTitle);
        this.firstName = this.getFirstName(nameAndTitle);
        this.middleName = this.getMiddleName(nameAndTitle);
        return this.buildPerson();
    }

    private getTitle(nameAndTitle: string): string {
        const titles = ['Mr', 'Ms', 'Mrs', 'Miss'];
        return titles[Number.parseInt(nameAndTitle.split(' ')[0])];
    }

    private getFirstName = (nameAndTitle: string) => nameAndTitle.split(' ')[1];

    private getMiddleName(nameAndTitle: string): string {
        const parts = nameAndTitle.split(' ').reverse();
        parts.pop();
        parts.pop();
        return parts.length > 0 ? parts.join(' ') : '';
    }

    private getEmail(): string {
        const domain = `@${this.home.replaceAll(' ', '-')}.com`;
        const name = this.middleName.length > 0 ? `${this.firstName}-${this.middleName.replaceAll(' ', '-')}` : this.firstName;
        let email = '';
        switch (randomNumber(3)) {
            case 0:
                email = `${name}.${this.lastName}`;
                break;
            case 1:
                email = `${this.firstName.charAt(0)}.${this.lastName}`;
                break;
            case 2:
                email = `${this.lastName}${this.firstName.charAt(0)}`;
                break;
            default:
                email = `${name}`;
        };
        return `${email}${randomNumberString(4)}${domain}`.toLowerCase();
    }

    private buildPerson() {
        return new PersonBuilder()
            .withTitle(this.title)
            .withFirstName(this.firstName)
            .withMiddleName(this.middleName)
            .withLastName(this.lastName)
            .withEmail(this.getEmail())
            .build();
    }

    private getRandom(collection: any[]): any {
        return collection[randomNumber(collection.length)]
    }
}