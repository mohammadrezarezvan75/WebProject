var person = { name: "mohammad", family: "rezvan", age: 24 };
console.log(person);

function person(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;

    var poya = new person("poya", "baomid", 22);
    console.log(poya);
}


