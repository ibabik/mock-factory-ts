import { HouseholdAndName } from "../data-readers/name-reader";
import { Address } from "../models/address";
import { generatePostalCode } from "../utils/generators";
import { randomFromCollection, randomNumber, randomNumberString } from "../utils/randomizers";

export class AddressBuilder {
    private line1!: string;
    private line2!: string;
    private city!: string;
    private state!: string;
    private province!: string;
    private postalCode!: string;
    private zipCode!: string;
    private country!: string;

    public withLine1(line1: string): AddressBuilder {
        this.line1 = line1;
        return this;
    }

    public withLine2(line2: string): AddressBuilder {
        this.line2 = line2;
        return this;
    }

    public withCity(city: string): AddressBuilder {
        this.city = city;
        return this;
    }

    public withState(state: string): AddressBuilder {
        this.state = state;
        return this;
    }

    public withProvince(province: string): AddressBuilder {
        this.province = province;
        return this;
    }

    public withPostalCode(postalCode: string): AddressBuilder {
        this.postalCode = postalCode;
        return this;
    }

    public withZipCode(zipCode: string): AddressBuilder {
        this.zipCode = zipCode;
        return this;
    }

    public withCountry(country: string): AddressBuilder {
        this.country = country;
        return this;
    }

    public build(): Address {
        return new Address(
            this.line1,
            this.line2,
            this.city,
            this.state,
            this.province,
            this.postalCode,
            this.zipCode,
            this.country
        );
    }

    public buildRandom(householdAndName: HouseholdAndName): Address {
        return this
            .withLine1(this.randomLine1(householdAndName))
            .withLine2(this.randomLine2())
            .withCity(householdAndName.home)
            .withState(this.randomState())
            .withProvince(this.randomProvince())
            .withZipCode(randomNumberString(5))
            .withPostalCode(generatePostalCode())
            .withCountry(householdAndName.home)
            .build();
    }

    private randomLine1(householdAndName: HouseholdAndName): string {
        const streetNameOptions = [
            householdAndName.lastName,
            `Prince of ${householdAndName.home}`,
            `Princess of ${householdAndName.home}`,
            `Lord of ${householdAndName.home}`,
            `Lady of ${householdAndName.home}`
        ];
        const streetTypeOptions = [
            'Street', 'Lane', 'Court', 'Hill', 'Row', 'Alley', 'Gardens', 'Road', 'Drive', 'Boulevard', 'Place', 'Terrace', 'Circle'
        ];
        return `${randomNumber(1000, 1)} ${randomFromCollection(streetNameOptions)} ${randomFromCollection(streetTypeOptions)}`;
    }

    private randomLine2(): string {
        const unitOptions = ['Apt', 'Condo', 'Suite', 'Unit', 'Flat', 'TH', 'Room', 'Building', 'Office'];
        return `${randomFromCollection(unitOptions)} ${randomNumber(100, 1)}`;
    }

    private randomState(): string {
        const states: string[] = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
            'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
            'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
        return randomFromCollection(states);
    }

    private randomProvince(): string {
        const provincesAndTerritories: string[] = [
            'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan',
            'Northwest Territories', 'Nunavut', 'Yukon'
        ];
        return randomFromCollection(provincesAndTerritories);
    }
}
