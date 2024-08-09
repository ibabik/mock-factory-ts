import { Person } from "./models/person";
import { randomFromCollection, randomLetter, randomNumber, randomNumberString } from "./utils/randomizers";
import { NameReader } from "./data-readers/name-reader";
import { PersonBuilder } from "./builders/person-builder";
import { Address } from "./models/address";
import { generatePostalCode, generateNationalInsuranceNumberUk } from "./utils/generators";
import { BankAccount } from "./models/bank-account";

export function generateRandomPerson(): Person {
    return new PersonBuilder().buildFromHouseholdAndName(NameReader.selectRandomName());
}

export function getPersonByFirstName(firstName: string): Person {
    return new PersonBuilder().buildFromHouseholdAndName(NameReader.getPersonByFirstName(firstName));
}

export function getPersonByFirstAndLastName(firstName: string, lastName: string): Person {
    return new PersonBuilder().buildFromHouseholdAndName(NameReader.getPersonByFirstAndLastName(firstName, lastName));
}

export {
    randomLetter,
    randomNumber,
    randomNumberString,
    randomFromCollection,
    generatePostalCode,
    generateNationalInsuranceNumberUk
};

export type { Person, Address, BankAccount };