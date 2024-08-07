import { PersonBuilder } from "./builders/person-builder";
import { Person } from "./models/person";
import { randomNumber, randomNumberString } from "./utils/randomizers";
import { NameReader } from "./data-readers/name-reader";

export {
    randomNumber,
    randomNumberString,
    NameReader,
    PersonBuilder
}

export type { Person }

console.log(new NameReader().getRandomName());