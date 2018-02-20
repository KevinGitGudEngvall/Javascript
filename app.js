/*var msg = 'Hello World';

console.log(msg);

console.log("result: " + Number(1 + 4));

console.log(new String("Hello world"));

console.log("Hello World".length);

console.log("Hello World".substr(3, 4));

console.log("Hello World"[6]);*/

var array = new Array("anna", "bert", "cedric", "kevin", "ylva");

console.log(array[2]);

console.log(array.pop());

console.log(array.length);

console.log(array[4]);

console.log(array);

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for(let item of array){
    console.log(item);
}

array.forEach(value, index, array) --> {
    console.log(index + ". " + value);
}

