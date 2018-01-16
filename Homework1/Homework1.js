var A = +prompt("Введите первое число");
var B = +prompt("Введите второе число, больше первого");

var sum = 0;
// var summanechet = 0;

for (A; A < B; A++) {
    sum = sum + A;
    if (A % 2 != 0) { 
        document.write(A + " ");
    }
}

document.write("Cумма от А до В равна: " + sum + "<br>");


