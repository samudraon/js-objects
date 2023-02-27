// const first = { a: 5 };
// const second = { a: 5 };
// const third = second;
// if (third === second) {
//     console.log('They are same');
// }
// else {
//     'different'
// };

/* do not use this method to compare object or array */
const first = { a: 5, b: 2, c: 3 };
const second = { a: 5, c: 3, b: 2 };
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// if (firstString === secondString) {
//     console.log('same')
// }
// else {
//     console.log('different');
// }


function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] === second[key]) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);