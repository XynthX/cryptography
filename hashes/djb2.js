/*
djb2 hash function
Hash speed (lower is better): 1.4
Made by: Daniel J. Bernstein
*/

function djb2(str) {
    let stringLength = str.length;
    let hash = 5381;
    for (let i = 0; i < stringLength; i++) {
        hash = hash * 33 ^ str.codePointAt(i);
    }
    return hash >>> 0;
}
