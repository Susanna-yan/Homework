/*-------Curry---------
function curry(cb){
    let arg = [];
    return function cruied(...args){
        arg.push(...args);
        if(args.length >= cb.length){
            let res = cb(...arg);
            arg.length = 0;
            return res;
        }
         return cruied;
    }
}

const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3)); 
console.log(sumFunc(1, 2)(3)); 
console.log(sumFunc(1, 2, 3)); 
console.log(prodFunc(1, 2, 3, 4)); 
console.log(prodFunc(1)(2, 3, 4)); 
console.log(prodFunc(1, 2)(3, 4)); 
console.log(prodFunc(1, 2, 3)(4));*/

/*-------Memorize-------
function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
   res *= i;
 }
 return res;
}

function memoize(cb) {
    let cache = {};
    return function(arg){
        if(arg in cache){
            return cache[arg];
        }
        let res = cb(arg);
        cache[arg] = res;
         return res;
    }
 }

const foo = memoize(factorial);
console.log(foo(5)); 
console.log(foo(5));*/

/*--------Pipe---------
function pipe(...func){
    return function (val){
        return func.reduce((acc,fn) => fn(acc), val);
    };
}
const add = a => a + 5;
const double = a => 2 * a;
const sub = a => a - 4;
const func = pipe(add, add, double, sub);
console.log(func(2));*/

/*--------Trace---------
function trace(cb){
    function wrapped(...arg){
        const output = cb(...arg);
     wrapped.history.push({arg,output});
       return output;
    }
     wrapped.history = [];
     return wrapped;
}

function foo(a,b){
    return a + b;
}
const traced = trace(foo);
console.log(traced(1,2));
console.log(traced(2,4,6));
console.log(traced.history);*/
