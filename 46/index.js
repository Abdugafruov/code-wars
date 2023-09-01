function digitize(n) {
    let sum = []
    n = String(n)
    n.split("")
    for (let i = 0; i <= n.length; i++) {
        if(i === n.length){
            return sum.reverse()
        }
        sum = sum.concat(+n[i])
    }
}