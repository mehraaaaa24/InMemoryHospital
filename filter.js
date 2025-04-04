// filtering
// what if i tell you, given an input, give me back all the even values from it

const arr = [1, 2, 3, 4, 5]
/*
const newArr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        newArr.push(arr[i]);
    }
}
console.log(newArr)
*/
function filterLogic(n) {
    if (n%2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const ans = arr.filter(filterLogic);
console.log(ans);
  