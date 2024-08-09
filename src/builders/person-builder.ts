import { HouseholdAndName } from "../data-readers/interfaces/household-and-name.interface";
import { Address } from "../models/address";
import { Person } from "../models/person";
import { randomNumber, randomNumberString } from "../utils/randomizers";
import { AddressBuilder } from "./address-builder";

export class PersonBuilder {
    private title!: string;
    private firstName!: string;
    private middleName!: string;
    private lastName!: string;
    private email!: string;
    private phoneNumber!: string;
    private home = '';
    private address!: Address;
    
    withTitle(title: string): PersonBuilder {
         this.title = title;
        return this;
    }

    withFirstName(firstName: string): PersonBuilder {
        this.firstName = firstName;
        return this;
    }

    withMiddleName(middleName: string): PersonBuilder {
        this.middleName = middleName;
        return this;
    }

    withLastName(lastName: string): PersonBuilder {
        this.lastName = lastName;
        return this;
    }

    withEmail(email: string): PersonBuilder {
        this.email = email;
        return this;
    }

    withPhoneNumber(phone: string): PersonBuilder {
        this.phoneNumber = phone;
        return this;
    }

    withAddress(address: Address): PersonBuilder {
        this.address = address;
        return this;
    }

    build() {
        return new Person(
            this.title,
            this.firstName,
            this.middleName,
            this.lastName,
            this.email,
            this.phoneNumber,
            this.address
        );
    }

    buildFromHouseholdAndName(householdAndName: HouseholdAndName): Person {
        this.home = householdAndName.home;
        const nameAndTitle = householdAndName.firstName;
        return this
            .withTitle(this.extractTitle(nameAndTitle))
            .withFirstName(this.extractFirstName(nameAndTitle))
            .withMiddleName(this.extractMiddleName(nameAndTitle))
            .withLastName(householdAndName.lastName)
            .withEmail(this.generateEmail())
            .withPhoneNumber(randomNumberString(10))
            .withAddress(new AddressBuilder().buildRandom(householdAndName))
            .build();
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
}