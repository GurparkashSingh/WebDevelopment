var animals = ["Dog", "Cat", "Rat", "Monkey", "Horse"];

console.log("Old Length: " + animals.length); // gets us the length of the array or number of elements im the array
console.log("Array: " + animals);

animals.push("Panda");
animals.push("Giraffe");

console.log("New Length: " + animals.length);
console.log("New Array: " + animals);

animals.pop();
animals.pop();
animals.pop();
animals.pop();

console.log("After poping: " + animals + ", length: " + animals.length);