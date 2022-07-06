const isValid = function (s) {
    const parentheses = {
        '(': 11,
        ')': 12,
        '{': 23,
        '}': 24,
        '[': 35,
        ']': 36,
    };
    const len = s.length;
    let isEven = len % 2 == 0 ? true : false;
    if (!isEven) {
        //if string len is odd,
        return false;
    } else {
        //if string len is even,
        for (let i = 0; i < s.length - 1; i++) {
            if (parentheses[s[i]] == parentheses[s[i + 1]] - 1) {
                i++;
            } else {
                return false;
            }
        }
    }

    return true;
};

const s = '{[]}';
console.log(isValid(s));
