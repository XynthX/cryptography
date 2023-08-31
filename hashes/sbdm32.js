/*
sbdm32 hash function
Hash speed (lower is better): 1.7
Made by: Daniel J. Bernstein
*/

function sbdm32(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.codePointAt(i) + (hash << 6) + (hash << 16) - hash;
    }
    return hash >>> 0;
}
