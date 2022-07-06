var plusOne = function (digits) {
    const numberStr = digits.join('');
    const number = parseInt(BigInt(numberStr)) + 1;
    // return number.toString().split('');
    return number;
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 1, 4, 3]));
