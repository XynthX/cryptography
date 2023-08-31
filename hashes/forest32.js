function forest32(str, seed = 31) {
    let h1 = numberUtils.imul(264347078, seed),
        h2 = numberUtils.imul(659060556, seed);
    let len = str.length;
    for (let i = 0; i < len; i++) {
        let code = str.charCodeAt(i);
        h1 = h1 << code ^ h2 ^ len;
        h2 = h2 << code ^ h1 ^ len;
    }
    let h = h1 * h2 ^ seed;
    return h;
}
