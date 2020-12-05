function myFunction() {
    // var message;
    // var x;

    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;

    try {
     
      if (x == "") throw "empty";
      if(isNaN(x)) throw "not a number";

      x=Number(x);

      if(x<5) throw "too low";
      if(x>10) throw "too hight";



    } catch (err) {
      message.innerHTML = "Input is "+err;
    }
    finally
    {
      document.getElementById("demo").value = "";
    }
  }


   // try {
    //     addmohamamdrezvan("mohammadreza");
    // }
    // catch (Err) {
    //     document.getElementById('Result').innerHTML = Err.message;
    // }
    // finally {
    //     alert("finally");
    // }