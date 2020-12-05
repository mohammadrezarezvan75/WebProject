
  document.getElementById('demo').innerHTML="mohammad reza rezvan";
  // سندی که به وسیله ی آی دی دمو ایجاد می شود و بین تگ باز و بسته قرار می گیرد چه چیزی
  //محمد رضا رضوان 

  function MyFunction() {
      
    var x = document.forms["frm1"];
    var text = "";

    for (var i = 0; i < x.length; i++) {
      text += x.elements[i].value + " <br />";
    }
    document.getElementById("demo").innerHTML = text;
  }

  // var Ps = document.getElementsByTagName("p");
  // for (n in Ps) {
  //   console.log(Ps[n].innerHTML);
  // }
  // var element = document.getElementsByClassName("iman");
  // console.log(element[0].innerHTML);

  // var x = document.querySelectorAll("p.iman");
  // console.log(x[0].innerHTML);
