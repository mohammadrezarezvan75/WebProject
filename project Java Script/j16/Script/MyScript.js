

function myfunction() {
    var x=document.forms["MyForm"]["fname"].value;
    if(x=="")
    {
        alert("please Enter Name !");
        return false;
    }
}