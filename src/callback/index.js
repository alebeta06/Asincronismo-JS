function sum(nun1, nun2) {
    return nun1 + nun2;
}

function calc(nun1, nun2, callback) {
    return callback(nun1, nun2);
}

console.log(calc(6, 2, sum));

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);