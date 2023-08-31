function makeNegative(num) {
    if (num > 0) {
        num = `-${num}`
        return +num
    }else return num
}