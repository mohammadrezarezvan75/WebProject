function changetext(id) {
    id.innerHTML = "ooops !";
}

function displayDate() {
    document.getElementById('demo').innerHTML = Date();
}

document.getElementById('mybtn').onclick = salammohammad;
function salammohammad() {
    alert('hello user...');
}

function loadbody() {
    alert('loaded....');
}

function mychange() {
    var elemnt = document.getElementById('fname');
    elemnt.value = elemnt.value.toUpperCase();
}


function mover(obj) {
    obj.innerHTML = "Thank you !";
}

function mout(objt) {
    objt.innerHTML = "mouse out ...";
}

function mdown(ob1) {
    ob1.style.backgroundColor = "#1ec5e5";
    ob1.innerHTML=" click chang color ...";
}

function mup(ob2) {
    ob2.style.backgroundColor = "#D94A38";
    ob2.innerHTML="unclick thnak you ...";
}