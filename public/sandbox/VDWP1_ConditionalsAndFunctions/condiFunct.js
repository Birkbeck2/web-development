let num1 = 5;
let num2 = 8;
let trueOrFalse = true;

function sumNums(){
    let num3 = 3;
    return num1 + num2 + num3;
}

function myConditional(){
    let randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber === 0){
        trueOrFalse = false;
    } else {
        trueOrFalse = true;
    }
    if(trueOrFalse === true){
        console.log("I am true");
    } else {
        console.log("I am false");
    }
}

let num4 = sumNums();
console.log(num4);

myConditional();
