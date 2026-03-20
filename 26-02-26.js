/*-------1----------
function getLength(s){
    return s.length;
}

let str = getLength("JS is amaizing!");
console.log("String length: ", str);*/

/*------2--------
function Upper(s){
    return s.toUpperCase();
}

let str = Upper("Hello World!");
console.log(str);*/

/*-----3--------
function Add(x,y){
    return x + y;
}

let sum = Add(10,20);
console.log(sum);*/

/*--------4-----------
function reverseStr(str){
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--){
        rev += str[i];
    }
     return rev;
}

console.log(reverseStr("Hello"));*/

/*---------5--------------
function strIncludes(s,inc){
    return s.includes(inc);
}
console.log(strIncludes("Learning JavaScript!", "Java"));*/

/*--------6-----------
let numList = [3, 6, 9, 12];

function indexArr(arr, n){
    return arr.indexOf(n);
}
console.log(indexArr(numList, 9));*/

/*-------7----------
function SumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
     return sum;
}
let expenses = [50, 75, 100];
console.log(SumArray(expenses));*/

/*--------8--------------
function includeStr(str, s){
     return str.includes(s);
}
console.log(includeStr("I like JS!", "like"));*/

/*-------9----------
function AddArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
     return sum;
}
let array = [4, 5, 6, 23];
console.log(AddArray(array));*/

/*-------10--------
function EvenOdd(n){
    if(!(n % 2 == 0)){
        return "Odd"
    } else {
        return "Even"
    }
}
console.log(EvenOdd(7));
console.log(EvenOdd(12));*/

/*-------11--------
function Type(val){
    if(val === null){
       return "null";
    }
    return typeof val;
}
console.log(Type(null));
console.log(Type(undefined));
console.log(Type(24));
console.log(Type("34"));
console.log(Type(''));*/

/*-------12--------
function isFalse(val){
    return !val;
}
console.log(isFalse(null));
console.log(isFalse(undefined));
console.log(isFalse(0));
console.log(isFalse(""));
console.log(isFalse(NaN));
console.log(isFalse(false));*/

/*-------13---------
function equale(x, y){
    return {
        strict: x === y,
        notstri: x == y
    };
}
console.log(equale(10 , "10"));
console.log(equale(20, 20));
console.log(equale(0, false));
console.log(equale(null, undefined));*/

/*------14---------
function isNum(val){
    return typeof val === "number" &&
           !isNaN(val) && isFinite(val) &&
            Number.isSafeInteger(val);

}
console.log(isNum(35));
console.log(isNum("23"));
console.log(isNum(NaN));*/


/*-------15-----------
function isNumber(val){
    let res = +val;
    if(Number.isNaN(res)){
        return null;
    }
     return res;
}
console.log(isNumber("0.5"));
console.log(isNumber("see"));
console.log(isNumber(true));
console.log(isNumber("23"));
console.log(isNumber(null));*/

/*------16--------
function Bool(b){
    return Boolean(b);
}
console.log(Bool(43));
console.log(Bool(undefined));
console.log(Bool(null));*/

/*-------17--------
function isObj(val){
    return typeof val === "object" &&
           val !== null &&
           !Array.isArray(val);

}
console.log(isObj({name: "Susanna"}));
console.log(isObj(42));
console.log(isObj([1,2,3,4]));
console.log(isObj(null));*/

/*--------18---------
function Primitive(val){
     return val === null ||
            (typeof val !== "object" && typeof val !== "function");
}
console.log(Primitive(42));
console.log(Primitive("Hello"));
console.log(Primitive(null));
console.log(Primitive({age: 19}));
console.log(Primitive(function(){}));*/


/* ---------19-------
function NumAdd(a,b){
  if(typeof a === "number" && typeof b === "number"){
    return a + b;
  }
   return "Invalid Input";
}
console.log(NumAdd(3,4));
console.log(NumAdd(3,"5"));
console.log(NumAdd(5,null))*/


