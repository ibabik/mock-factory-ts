# mock-factory-ts
mock-factory-ts is a TypeScript library designed to generate unique random values for use in automated tests. It provides functions for creating random people, generating random numbers and strings, and selecting random items from collections. This library is particularly useful for testing scenarios where you need consistent but varied test data.  
*Names used in the library are inspired by characters from the HBO series 'The Game of Thrones', providing a rich variety of test data.*

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

**randomLetter()**: string: Generates a random lowercase letter from a to z.

**generatePostalCode()**: string: Generates a random Canadian-style postal code.

**generateNationalInsuranceNumberUk()**: string: Generates a random UK National Insurance Number.

### Exported Types
**Person**: Represents a person with the following properties:
```typescript
title: string
firstName: string
middleName: string
lastName: string
email: string
phoneNumber: string
address: Address
bankAccount: BankAccount
```
**Address**: Represents a unique address with US state and zip as well as a Canadian province and postal code   
Example:
```typescript
Person {
  title: 'Mr',
  firstName: 'Eddard',
  middleName: 'Ned',
  lastName: 'Stark',
  email: 'e.stark7787@winterfell.com',
  phoneNumber: '4547820595',
  address: Address {
    line1: '421 Lord of Winterfell Street',
    line2: 'Building 49',
    city: 'Winterfell',
    state: 'Vermont',
    province: 'Prince Edward Island',
    postalCode: 'G5G 8W4',
    zipCode: '31280',
    country: 'Winterfell'
  },
  bankAccount: BankAccount {
    bankName: 'Iron Bank',
    bankAccountName: 'Eddard Stark',
    sortCode: '828430',
    accountNumber: '43810690'
  }
}
```
