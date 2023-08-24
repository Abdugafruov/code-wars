function abbrevName(name){
    for (let i = 0; i < name.length; i++) {
        if (name[i] === " ") return `${name[0].toUpperCase()}.${name[i + 1].toUpperCase()}`;
    }
    return name
}