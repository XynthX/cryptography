/*
Java hash code function
Hash speed (lower is better): 1.2
Made by: (Likely) Joshua Bloch
*/

function javaHash(str) {
    var hash = 0;
    var length = str.length;
    var index = 0;
    if (length > 0) {
        while (index < length) {
            hash = (hash << 5) - hash + str.charCodeAt(index++) | 0;
        }
    }
    return hash;
}
