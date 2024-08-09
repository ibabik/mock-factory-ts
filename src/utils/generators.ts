import { randomFromCollection, randomNumber, randomNumberString } from "./randomizers";

export function generatePostalCode(){
    const letters = 'ABCEGHJKLMNPRSTWXY'.split('');
    return `${randomFromCollection(letters)}${randomNumber(10)}${randomFromCollection(letters)} ${randomNumber(10)}${randomFromCollection(letters)}${randomNumber(10)}`;
}

export function generateNationalInsuranceNumberUk(){
    const prefixLetters = 'ACDEFHIJLMOPQRSUVWXY';
    const suffixLetters = 'ABCD';
    return `${randomFromCollection(prefixLetters.split(''))}${randomFromCollection(prefixLetters.split(''))}${randomNumberString(6)}${randomFromCollection(suffixLetters.split(''))}`;
}