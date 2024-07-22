function getLittleName(users) {
    if (users.length === 0) {
        return null;
    }

    let little = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < little.age) {
            little = users[i];
        }
    }
    return little.name;
}

const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];

console.log(getLittleName(users));




function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function randomThree() {
    let rolls = 0;
    let result;

    do {
        result = randomDice();
        rolls++;
    } while (result !== 3);

    return rolls;
}

function Winner() {
    const rollsA = randomThree();
    const rollsB = randomThree();

    if (rollsA < rollsB) {
        return `A გაიმარჯვა ${rollsA} ცდაში`;
    } else if (rollsB < rollsA) {
        return `B გაიმარჯვა ${rollsB} ცდაში`;
    } else {
        return ` ორივემ გაიმარჯვა ${rollsA} ცდაში`;
    }
}

console.log(Winner());