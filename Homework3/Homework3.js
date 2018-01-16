var x = 10;
var y = 12;
//Прямоугольник
for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
        document.write("* ");
    }
    document.write("<br>");
}

document.write("<br>");
//Прямоугольный треугольник
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i + 1; j++) {
        document.write("* ");
    }
    document.write("<br>");
}

document.write("<br>");

// Равностороний треугольник
var n = 7;
var l = 0;

for (var i = 0; i < n; i++) {
    for (var k = 0; k < (2 * n / 2 - i); k++) {
        document.write(" &nbsp; ");
    }
    for (var j = 0; j < l; j++) {
        document.write("&nbsp * ");
    }
    l++;

    document.write("<br>");
}

document.write("<hr>");

var nn = 5;
var ll = 0;

for (var ii = 0; ii < nn; ii++) {


    for (var kk = 0; kk < (2 * nn / 2 - ii) ; kk++) {
        document.write(" &nbsp&nbsp");
    }

    for (var jj = 0; jj < ll; jj++) {
        document.write(" &nbsp * ");

    }
    ll++;

    document.write("<br/>");
}

for (var ii = 0; ii < nn; ii++) {


    for (var kk = 0; kk < (2 / nn * 2 + ii) ; kk++) {
        document.write(" &nbsp");
    }

    for (var jj = 0; jj < ll; jj++) {
        document.write("&nbsp * ");

    }
    ll--;

    document.write("<br/>");
}