//+ و - و * و / و % و ++ و -- 
var FirstNumber = 10;
var SecoundNumber = 15;

var lbl = document.getElementById("lblResult");
//lbl.innerHTML="salam";
//lbl.innerHTML = FirstNumber + SecoundNumber;
//lbl.innerHTML = FirstNumber - SecoundNumber;
//lbl.innerHTML = FirstNumber * SecoundNumber;
//FirstNumber++;
//FirstNumber++;
//FirstNumber--;
//lbl.innerHTML = FirstNumber;

//+= , -= , *=, ...

//FirstNumber -= 8;
//lbl.innerHTML = FirstNumber;

function Sum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var sum = num1 + num2;
    lbl.innerHTML = sum;
}

var f = parseFloat("10.5");
//lbl.innerHTML=f;
//var isActive = Boolean(0);//false
var isActive = Boolean(1);
console.log(isActive);