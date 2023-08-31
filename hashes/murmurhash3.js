/*
murmurhash3 hash function
Hash speed (lower is better): 4.0 (Murmurhash is very fast, this may be because my implementation is slow)
Made by: Austin Appleby
*/

function murmurhash3(str, seed) {
    var c1 = 3432918353;
    var c2 = 461845907;
    var r1 = 15;
    var r2 = 13;
    var m = 5;
    var n = 3864292196;
    var h = seed;
    var len = str.length;
    var currentIndex = 0;
    while (len >= 4) {
        var k = str.charCodeAt(currentIndex) & 255 |
            (str.charCodeAt(currentIndex + 1) & 255) << 8 |
            (str.charCodeAt(currentIndex + 2) & 255) << 16 |
            (str.charCodeAt(currentIndex + 3) & 255) << 24;
        k = Math.imul(k, c1);
        k = k << r1 | k >>> 32 - r1;
        k = Math.imul(k, c2);
        h ^= k;
        h = h << r2 | h >>> 32 - r2;
        h = Math.imul(h, m) + n >>> 0;
        len -= 4;
        currentIndex += 4;
    }
    var k1 = 0;
    switch (len) {
        case 3:
            k1 ^= (str.charCodeAt(currentIndex + 2) & 255) << 16;

        case 2:
            k1 ^= (str.charCodeAt(currentIndex + 1) & 255) << 8;

        case 1:
            k1 ^= str.charCodeAt(currentIndex) & 255;
            k1 = numberUtils.imul(k1, c1);
            k1 = k1 << r1 | k1 >>> 32 - r1;
            k1 = numberUtils.imul(k1, c2);
            h ^= k1;
    }
    h ^= str.length;
    h ^= h >>> 16;
    h = Math.imul(h, 2246822507);
    h ^= h >>> 13;
    h = Math.imul(h, 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
}
