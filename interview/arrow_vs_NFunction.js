// let arrowFunc = _ => console.log('Arrow Function');

// arrowFunc();

// argument binding
function regularFunction(a, b) {
    console.log({ ...arguments });
}
regularFunction(1, 2);

// const arrowFunction = (...rest) => {
//     console.log(rest);
// };
// arrowFunction(1, 2);
