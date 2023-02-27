/* 1. for of can not used with objects */
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
/* first option to loop through an object */
const keys = Object.keys(bottle);
// console.log(keys);
/* 
3 ways to read object properties 
bottle.color
bottle['color']
bottle[key]
*/
for (const key of keys) {
    // console.log(key, bottle[key]);
}

/* for in loop. will use most of the time */
for (const key in bottle) {
    const value = bottle[key];
    console.log(key, value);
}

/* advanced */
