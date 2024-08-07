import { Person } from "./models/person";
import { randomFromCollection, randomNumber, randomNumberString } from "./utils/randomizers";
import { NameReader } from "./data-readers/name-reader";

const nameReader = new NameReader();

export function generateRandomPerson(): Person {
    return nameReader.generateRandomPerson();
}

export function getPersonByFirstName(firstName: string): Person {
    return nameReader.getPersonByFirstName(firstName);
}

export function getPersonByFirstAndLastName(firstName: string, lastName: string): Person {
    return nameReader.getPersonByFirstAndLastName(firstName, lastName);
}

export {
    randomNumber,
    randomNumberString,
    randomFromCollection
}

export type { Person }