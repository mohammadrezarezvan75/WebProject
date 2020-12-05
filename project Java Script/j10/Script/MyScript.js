// var Names = ["mohammad", "poya", "reza"]
// var element = document.getElementById('Result');
// var text = Names[0] + "<br/>";
// text += Names[1]+ "<br/>";
// text += Names[2]+ "<br/>";

// element.innerHTML = text;

var Names = ["mohammad", "poya", "reza", "alireza","ghorbanali"]
var element = document.getElementById('Result');
var text = "";

for (var i = 0; i < Names.length; i++) {
    text += Names[i] + "<br>";
}
element.innerHTML = text;

for (n in Names) {
    alert(Names[n]);
}


