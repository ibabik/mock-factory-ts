import { BankAccount } from "../models/bank-account";
import { randomNumberString } from "../utils/randomizers";

export class BankAccountBuilder {
    private bankName!: string;
    private bankAccountName!: string;
    private sortCode!: string;
    private accountNumber!: string;

    withBankName(bankName: string): BankAccountBuilder {
        this.bankName = bankName;
        return this;
    }

    withBankAccountName(accountName: string): BankAccountBuilder {
        this.bankAccountName = accountName;
        return this;
    }

    withSortCode(sortCode: string): BankAccountBuilder {
        this.sortCode = sortCode;
        return this;
    }

    withAccountNumber(accountNumber: string): BankAccountBuilder {
        this.accountNumber = accountNumber;
        return this;
    }

    build(): BankAccount {
        return new BankAccount(
            this.bankName,
            this.bankAccountName,
            this.sortCode,
            this.accountNumber
        );
    }

    buildRandom(firstName: string, lastName: string): BankAccount {
        return this.withBankName('Iron Bank')
            .withBankAccountName(`${firstName} ${lastName}`)
            .withSortCode(randomNumberString(6))
            .withAccountNumber(randomNumberString(8))
            .build();
    }
}