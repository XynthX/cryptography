/*
Jenkins-OOAT hash function
Hash speed (lower is better): 1.4
Made by: Bob Jenkins
*/

function jenkinsOOAT(str) {
    let hash = 0;
    for (let i = 0; i < str.length; ++i) {
        hash += str.charCodeAt(i);
        hash += hash << 10;
        hash ^= hash >> 6;
    }
    hash += hash << 3;
    hash ^= hash >> 11;
    hash += hash << 15;
    return hash >>> 0;
}
