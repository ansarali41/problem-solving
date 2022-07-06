var lengthOfLastWord = function (s) {
    const words = s.trim().split(' ');
    const lastWord = words.length - 1;
    return words[lastWord].length;
};

console.log(lengthOfLastWord('Today is a nice day'));
