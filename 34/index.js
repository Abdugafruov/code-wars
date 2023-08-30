function past(h, m, s){
    sum = 0;
    h = h * 3600000;
    m = m * 60000;
    s = s * 1000;
    sum = h + m + s
    return sum;
}