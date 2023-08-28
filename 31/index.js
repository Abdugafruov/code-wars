function feast(beast, dish) {
    if(beast[0] === dish[0] && beast.at(-1) === dish.at(-1)) return true;
    else return false
}