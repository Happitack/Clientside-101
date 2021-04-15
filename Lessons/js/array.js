//// Javascript Arrays ////

var arr = ["1", "2", "3"]; // Opretter et nyt array

arr.forEach(function(item, i) {console.log(item)} ); // Søger hvert enkelt element i arrayet igennem

arr.push(42); // Tilføjer "42" til arrayet

arr.pop(); // Fjerne det sidste indexet item i arrayet

arr.shift("god morgen"); // Tilføjer "god morgen" som index item 0;

arr.unshift; // Tager og fjerner det første element i et array.

arr.forEach((item, inx, arr) => { }); // Lambda expression

console.log (typeof "hej");     // Returns typeof "string"¨
console.log (typeof 42);        // Returns typeof "number"
console.log (typeof arr);       // Returns typeof "object"

var myObj = {}; // Samme som "var myObject = new Object" i C#

var myObj2 = {navn: "Peter", stilling: "Lærer" }; // Gemmer et objecter og tilhørerende strings i en funktion
myObj2.navn;                                      // Returnere navne fra funktionen
myObj2["stilling"];                               // Returnere en specifik string fra funktionen

var obj3 = {navn: "Ole", age: 42, getName: function(){return obj3.navn;}};



const object1 = {
    a: "something",
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
};