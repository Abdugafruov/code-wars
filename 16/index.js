function century(year) {
    if ((year / 100) <= 0) {
        return 1
    }else return Math.ceil(year / 100)
}