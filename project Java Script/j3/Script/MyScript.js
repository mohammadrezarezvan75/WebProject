var Name = "mohammad";
var Family = "Rezvan";

alert(Name + " " + Family);

var Names = ["mohammad", "reza", "poya", "zahra"];
document.write(Names.length);
document.write("<br/>");

var MyArray = new Array("rezvan", "kazem nia", "Baomid", "ashrafi");
document.write(Names[0]);
document.write("<br/>");
document.write(MyArray);

document.write("<br/>");
MyArray[2] = "rezayi";
document.write(MyArray);


//////////////////نگهداری اطلاعات شخص
var person = ["alireza ", "khakbaz", 23];
document.write("<br/>");
document.write("Name  :  ," + person[0] + " " + "Family  :  ," + person[1] + " " + "Age :  ," + person[2]);

///////sort and console log
var sortArray = MyArray.sort();
console.log(sortArray);