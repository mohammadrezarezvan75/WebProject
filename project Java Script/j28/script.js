// function MyFunction() {
//   alert('salam mamad');
// }

// خروجی به صورت قبول و لغو و چاپ مقدار 

// function MyFunction() {
//   var text = "";
//   if (confirm("Press a Button !")) {
//     text = "your press is ok !";

//   }
//   else {
//     "you Press Cancel !";
//     text = "your press is cancel !";
//   }
//   document.getElementById("demo").innerHTML = text;
// }


// برای دریافت مقداری از کاربر است 

function MyFunction() {
  var text = "";
  var Person = prompt("Please Enter Your Name : ", "Gust");
  if (Person == null || Person == "") {
    text = "User Canlled A prompt !";
  }
  else {
    text = "Salam" + Person;
  }

  document.getElementById("demo").innerHTML = text;

}