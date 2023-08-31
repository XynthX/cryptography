/*
Ultra Fast Hash (UFH) hash function
Hash speed (lower is better): 1.0
Made by: Me
*/

function ufh(str) {
    let hash = 5381;
    const length = str.length;
    for (let i = 0; i < length; i++) {
        hash = hash ^ str.charCodeAt(i);
    }
    return hash;
}
