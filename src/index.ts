import { Person } from "./models/person";
import { randomFromCollection, randomNumber, randomNumberString } from "./utils/randomizers";
import { NameReader } from "./data-readers/name-reader";
import { PersonBuilder } from "./builders/person-builder";

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
    randomNumber,
    randomNumberString,
    randomFromCollection
}

export type { Person }