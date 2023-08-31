/*
murmurhash2 hash function
Hash speed (lower is better): 2.9 (Murmurhash is very fast, this may be because my implementation is slow)
Made by: Austin Appleby
*/

function murmurhash2(str, seed) {
    var m = 1540483477;
    var r = 24;
    var h = seed ^ str.length;
    var len = str.length;
    var currentIndex = 0;
    while (len >= 4) {
        var k = str.charCodeAt(currentIndex) & 255 |
            (str.charCodeAt(currentIndex + 1) & 255) << 8 |
            (str.charCodeAt(currentIndex + 2) & 255) << 16 |
            (str.charCodeAt(currentIndex + 3) & 255) << 24;
        k = Math.imul(k, m);
        k ^= k >>> r;
        k = Math.imul(k, m);
        h = Math.imul(h, m);
        h ^= k;
        len -= 4;
        currentIndex += 4;
    }
    switch (len) {
        case 3:
            h ^= (str.charCodeAt(currentIndex + 2) & 255) << 16;

        case 2:
            h ^= (str.charCodeAt(currentIndex + 1) & 255) << 8;

        case 1:
            h ^= str.charCodeAt(currentIndex) & 255;
            h = Math.imul(h, m);
    }
    h ^= h >>> 13;
    h = Math.imul(h, m);
    h ^= h >>> 15;
    return h >>> 0;
}
