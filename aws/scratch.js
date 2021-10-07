console.log('Hello World!');

const decoded = (encoded) => {
    //check the encoded input
    if (!encoded) {
        return '';
    }
    let decodedString = '';
    for (let i = 0; i <= encoded.length - 1; i += 2) {
        const count = encoded[i]
        const char = encoded[i + 1]
        for (let j = 0; j < count; j++) {
            decodedString += char;
        }
    }
    return decodedString;
}

console.log('result: ', decoded('2a1b2c'));