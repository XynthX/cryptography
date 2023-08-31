/*
fnv1a hash function
Hash speed (lower is better): 1.9
Made by: Glenn Fowler, Landon Curt Noll, Phong Vo (Fowler-Noll-Vo = FNV)
*/

function fnv1a32(str, seed) {
    const FNV_OFFSET = 2166136261;
    const FNV_PRIME = 16777619;
    let hashValue = seed || FNV_OFFSET;
    for (let i = 0; i < str.length; i++) {
        hashValue ^= str.charCodeAt(i);
        hashValue += (hashValue << 1) +
            (hashValue << 4) +
            (hashValue << 7) +
            (hashValue << 8) +
            (hashValue << 24);
    }
    return hashValue >>> 0;
}
