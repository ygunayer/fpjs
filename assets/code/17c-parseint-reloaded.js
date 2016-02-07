var keywords = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000,
    'billion': 10000000
};

function parseInt(str) {
    var parts = str.match(/\w+/g).filter(function(word) {
        return word != 'and';
    });
    // implement this
    var agg = parts
        .map(part => keywords[part])
        .reduce((acc, x) => {
            if (x >= 1000) {
                acc.sum += acc.carry * x;
                acc.carry = 0;
            } else if (x >= 100) {
                acc.carry *= x;
            } else {
                acc.carry += x;
            }
            return acc;
        }, {
            sum: 0,
            carry: 0
        });
    return agg.sum + agg.carry;
};

console.log('parseInt(twenty-eight):', parseInt('twenty-eight')); // 28
console.log('parseInt(six hundred and sixty six):', parseInt('six hundred and sixty six')); // 666
console.log('parseInt(one million and one):', parseInt('one million and one')); // 1000001
