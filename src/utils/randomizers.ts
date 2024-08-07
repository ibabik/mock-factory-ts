export function randomNumber(max: number, min: number = 0): number {
    if (min > max) {
        throw new Error('Max value must be greater than min value');
    };

    if (max - min === 0){
        return max;
    }

    const random = Math.random();
    const range = max - min;
    return Math.floor(random * range) + min;
}

export function randomNumberString(length: number): string {
    let numberString = '';
    for(let i=1; i<=length; i++){
        numberString += randomNumber(10);
    };
    return numberString;
}

export function randomFromCollection<T>(collection: T[]): T {
    return collection[randomNumber(collection.length)];
}