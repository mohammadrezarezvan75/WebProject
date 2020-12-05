var Person = {
    Name: "MohammadReza",
    Family: "Rezvan",
    Age: 23,
    FullName:function()
    {
        return this.Name + " " + this.Family;
    }


  
};

console.log(Person.FullName());