function addLength(str) {
    str = str.split(" ");
    for (let i = 0; i <= str.length; i++) {
        if(i === str.length) return str;
        str[i] = `${str[i]} ${str[i].length}`
    }
}