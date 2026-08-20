// waxaa li diray inaan isla isticmaalo for in iyo for of 

const persons = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "Moha", age: 20, city: "Mogadishu" },
    { name: "Ali", age: 28, city: "Kenya" }
];

for (const person of persons) {
    console.log("Properties and values of each person:");
    
    for (const key in person) {
        console.log(key + ": " + person[key]);
    }
    
    console.log("---");
}