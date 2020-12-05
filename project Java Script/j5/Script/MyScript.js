function sayhello() {
    alert('salam');
}
sayhello();

/*function FullName(Name, Family) {
    return Name + Family;
}

alert(FullName("MohammadReza", "Rezvan"));*/

function Sum(FirstNumber, SecoundNumber) {

    return FirstNumber + SecoundNumber;
}

//alert(Sum(4, 3));

document.getElementById("lblResult").innerHTML = Sum(34, 12);

function FullName(Name, Family) {

    return Name + " " + Family;
}

document.getElementById("lblResult").innerHTML=FullName("MohammadReza","Rezvan");