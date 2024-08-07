# mock-factory-ts
mock-factory-ts is a TypeScript library designed to generate unique random values for use in automated tests. It provides functions for creating random people, generating random numbers and strings, and selecting random items from collections. This library is particularly useful for testing scenarios where you need consistent but varied test data.
Names used in the library are inspired by characters from the HBO series 'The Game of Thrones', providing a rich variety of test data.

## Installation
You can install mock-factory-ts using npm:
`npm install mock-factory-ts`

## Usage
Here’s how to use the functions and types provided by mock-factory-ts:

### Exported Methods
**generateRandomPerson()**: Generates a random Person object.

```typescript
import { generateRandomPerson } from 'mock-factory-ts';

const person = generateRandomPerson();
console.log(person);
```

**getPersonByFirstName(firstName: string)**: Retrieves a Person object with the specified first name. firstName must be one of the GOT names.

**getPersonByFirstAndLastName(firstName: string, lastName: string)**: Retrieves a Person object with the specified first and last name. firstName and lastName must be a GOT name.

**randomNumber(max: number, min: number = 0): number**: Generates a random number between min (inclusive) and max (exclusive).

**randomNumberString(length: number): string**: Generates a random string of digits with the specified length.

**randomFromCollection<T>(collection: T[]): T**: Selects a random item from the provided collection.

### Exported Types
**Person**: Represents a person with the following properties:
```typescript
title: string
firstName: string
lastName: string
email: string
```