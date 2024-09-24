console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(i = 0; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
    else{
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("Fizzbuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        continue;
    }
}

//Exercise 3
console.log("EXERCISE 3:\n==========\n");
console.log("Ex1:");
let increment = 0;
do{
    if(increment % 2 != 0){
        console.log(increment);
    }
    else{
    }
    increment++;
}while(increment<100);
increment = 0;
console.log("Ex2:");
do{
    if(increment % 3 == 0 && increment % 5 == 0){
        console.log("Fizzbuzz");
    }
    else if(increment % 3 == 0){
        console.log("Fizz");
    }
    else if(increment % 5 == 0){
        console.log("Buzz");
    }
    else{
    }
    increment++;
}while(increment<100);

console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500-100) + 100);
let valueFound = false;
for(i = 0; i <= n; i++){
    if(i == value){
        valueFound = true;
        break;
    }
}
if(valueFound){
    console.log("Value found!");
}
else{
    console.log("Did not found value.")
}

console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);
for (i = start; i <= end; i++){
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log("Fizzbuzz");
    }
    else if(i % fizzDivisor == 0){
        console.log("Fizz");
    }
    else if(i % buzzDivisor == 0){
        console.log("Buzz");
    }
    else{
        continue;
    }
}