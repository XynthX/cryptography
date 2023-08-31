/*
djb2 hash function
Hash speed (lower is better): 34 (I'm pretty sure this hash was designed to be slow)
Made by: ?? NgRBAgAPQQ4PDRhBCQ4RBEEHDhNBBQQAFQk= ??
*/

function crc32(str) {
    const crcTable = [];
    const polynomial = 3988292384;
    const n = 4294967295;
    let crc = n;
    for (let i = 0; i < 256; i++) {
        let crcValue = i;
        for (let j = 0; j < 8; j++) {
            if (crcValue & 1) {
                crcValue = crcValue >>> 1 ^ polynomial;
            } else {
                crcValue >>>= 1;
            }
        }
        crcTable[i] = crcValue;
    }
    for (let i = 0; i < str.length; i++) {
        const byte = str.charCodeAt(i) & 255;
        crc = crc >>> 8 ^ crcTable[(crc ^ byte) & 255];
    }
    let result = (crc ^ n) >>> 0;
    if (hex) {
        return result.toString(16);
    } else {
        return result;
    }
}
