var person = { name: "mohammad", family: "rezvan", age: 24 };
console.log(person);

function Person(name, family, age) {

    this.name = name;
    this.family = family;
    this.age = age;
    this.Fullname = function () {
        return this.name + " " + this.family + "" + this.age;
    }
}

var mohammad = new Person("mohammad", "rezvan", 22);
mohammad.carname = "BMW 220i";
console.log(mohammad);// نمایش نام ماشین
// console.log(mohammad.Fullname());//نمایش ندادن نام ماشین 
var alireza = new Person("alireza", "farokhi", 20);

var people = [];
people.push(new Person("reza", "kazem nia", 23));
people.push(new Person("poya", "Ghorbani", 22));
people.push(new Person("ali", "ahmadi", 17));
people.push(new Person("faride", "kazemi", 19));

var text = "";
for (x in people) {
    // text += people[x].name + " " + people[x].family + " " + people[x].age + "<br/>";
    console.log(people[x].Fullname());

}
document.getElementById("Result").innerHTML = text;