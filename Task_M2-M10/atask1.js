const numbers = [2, 134, 54, 5, 7, 2, 87, 5];

const unique = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (!unique.includes(number)) {
        unique.push(number);
    }
}

console.log(unique);