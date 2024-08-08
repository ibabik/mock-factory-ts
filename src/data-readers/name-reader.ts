import { randomFromCollection } from "../utils/randomizers";
import { DataReader } from "./data-reader";
import { HouseholdAndName } from "./interfaces/household-and-name.interface";

interface Household {
    home: string,
    lastName: string,
    names: string[]
}

export class NameReader extends DataReader {
    static readAll(): Household[] {
        const data = super.read('names.yaml');
        return data as Household[];
    }

    static selectRandomName(): HouseholdAndName {
        const names = flattenHouseholdNames();
        return randomFromCollection(names);
    }

    static getPersonByFirstName(firstName: string): HouseholdAndName {
        const people = flattenHouseholdNames();
        const person = people.find(p => p.firstName.includes(firstName));
        if (!person) {
            throw new Error(`No records found for first name '${firstName}'`)
        }
        return person;
    }

    static getPersonByFirstAndLastName(firstName: string, lastName: string): HouseholdAndName {
        const people = flattenHouseholdNames();
        const person = people.find(p => p.lastName === lastName && p.firstName.includes(firstName));
        if (!person) {
            throw new Error(`No records found for name '${firstName} ${lastName}'`)
        }
        return person;
    }
}

function flattenHouseholdNames(): HouseholdAndName[] {
    return NameReader.readAll().flatMap(h =>
        h.names.map(n => ({ lastName: h.lastName, firstName: n, home: h.home }))
    );
}

export { HouseholdAndName };
