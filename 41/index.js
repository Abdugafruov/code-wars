function repeatStr (n, s) {
    let a = ""
    for (let i = 0; i <= n; i++) {
        if(i === n) {
            return a;
        }else a = a.concat(s);
    }
}