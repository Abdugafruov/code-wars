function sum (numbers) {
    if (numbers.length !== 0) {
        numbers = numbers.join("+");
        var sum = eval(numbers);
        return sum;
    }else return 0
};