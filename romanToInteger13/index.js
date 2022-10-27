const romanToInt = (romanNum) => {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let result = 0;
    for (let i = 0; i < [...romanNum].length; i++) {
        if (romanNum[i] == 'I' && romanNum[i + 1] == 'V') {
            result += 4;
            i++;
        } else if (romanNum[i] == 'I' && romanNum[i + 1] == 'X') {
            result += 9;
            i++;
        } else if (romanNum[i] == 'X' && romanNum[i + 1] == 'L') {
            result += 40;
            i++;
        } else if (romanNum[i] == 'X' && romanNum[i + 1] == 'C') {
            result += 90;
            i++;
        } else if (romanNum[i] == 'C' && romanNum[i + 1] == 'D') {
            result += 400;
            i++;
        } else if (romanNum[i] == 'C' && romanNum[i + 1] == 'M') {
            result += 900;
            i++;
        } else {
            result += roman[[...romanNum][i]];
        }
    }
    return result;
};

console.log(romanToInt('MCMXCIV'))