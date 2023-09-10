function setAlarm(employed, vacation){
    if (employed === true) {
        switch (vacation) {
            case true : return false
            case false : return true
        }
    }
    if (employed === false) {
        switch (vacation) {
            case true : return false
            case false : return false
        }
    }
}