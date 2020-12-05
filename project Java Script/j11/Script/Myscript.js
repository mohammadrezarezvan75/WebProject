// var i = 1;
// while (i <= 10) {
//     document.write(i + "</br>");
//     i++;
// }

// var i = 1;
// do {
//     document.write(i + "</br>");
//     i++;
// } while (i <= 10)

// var Names = ["mohammad", "reza", "poya"];
// var i = 0;
// while (Names[i]) {
//     document.write(Names[i] + "<br/>");
//     i++;
// }

for (var i = 0; i <= 10; i++) {

    if (i === 3 || i === 7) {
        continue;
    }
    document.write(i + "<br/>");
}