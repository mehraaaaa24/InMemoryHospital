// given an array, give me back a new array in which every value is multiplied by 2

// [1, 2, 3, 4]
// [2, 4, 6, 8]

function transform(i) {
    return i * 2;
}
const input  = [1, 2, 3, 4, 5];

// const ans = transform(2);
// console.log(ans);

const ans = input.map(transform);
console.log(ans);

