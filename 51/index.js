function dutyFree(normPrice, discount, hol){
    let sum = (normPrice * discount) / 100
    return Math.floor(hol / sum)
}