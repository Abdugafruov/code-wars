function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let lose = 0
    for (let i = 0; i < classPoints.length; i++) {
        if (classPoints[i] > yourPoints) {
            sum = sum + 1
        }else lose = lose + 1
    }
    if (sum >= lose) {
        return false
    }else return true
}