var addBinary = function (a, b) {
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return (dec >>> 0).toString(2);
};
console.log(addBinary('11', '1'));
