var x = 10;
var y = 12;

for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
        document.write("* ");
    }
    document.write("<br>");
}

document.write("<br>");

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i + 1; j++) {
        document.write("* ");
    }
    document.write("<br>");
}

document.write("<br>");

// for (var i = 0; i < 10; i++) {
//     for (var j = 10; j> i*1; j--) {
//         document.write("* ");
//     }
//     document.write("<br>");

// }
for (var k = 0; k < 10; k++) {
    for (var i = 0, j = 10; i < j; i++ , j--) {
        document.write(" ");
        if(i>=j){
            document.write("*");
        }
    }
    document.write("<br>");
}
