function stringy(size) {
    let a = ""
    for(let i = 1; i <= size; i++){
        if (i % 2 === 0){
            a += "0"
        }else a += "1";
    }return a
}