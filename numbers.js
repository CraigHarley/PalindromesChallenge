const getRandomInt = max =>
    Math.floor(Math.random() * Math.floor(max));

const numbers = [];
for (let i = 0; i < 1; i++){
    numbers
        .push(getRandomInt(100000000));
}

export default numbers;
