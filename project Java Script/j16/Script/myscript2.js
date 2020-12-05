

function myfunction() {
    var x, text;
    x = document.forms["MyForm"]["fname"].value;
    if (isNaN(x) || x < 2 || x < 10) {
        text = "input not valid";
        document.getElementById('demo').innerHTML = text;

    }
    else {
        text = "input ok";
        document.getElementById('demo').style.color="green";
    }
    
}