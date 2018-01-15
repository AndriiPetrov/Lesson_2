var x = +prompt("Введите факториал числа");
dostavka = 1;

do {
    if (x == 0) {
        dostavka = 1;
        break
    }
    dostavka = dostavka * x;
    x--;
} while (x > 0)

console.log("dostavka vosmoshna " + dostavka);